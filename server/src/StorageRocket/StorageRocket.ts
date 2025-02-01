import { ReadTask, UploadTask, CacheEntry, StorageRocketOptions, StorageRocketConfigs, StorageRocketUploadOptions, StorageRocketUploadConfigs, LimitErrors } from "./StorageDefinition";
import { UploadGroup } from "@/UploadGroup/UploadGroup";
import { compress, decompress } from "@/Compress/Compress";

export class StorageRocket {
    public storage: GameDataStorage<JSONValue>;
    private _cache: Map<string, CacheEntry> = new Map();
    private readTasks: Map<string | undefined, {
        curExecTimeout: number,
        tasks: ReadTask[]
    }> = new Map();
    private uploadTasks: Map<string, {
        curExecTimeout: number,
        tasks: UploadTask[]
    }> = new Map();
    private r_restrictedTime: number = 0;
    private w_restrictedTime: number = 0;
    private configs: StorageRocketConfigs = {
        cacheCleanupConfig: {
            cleanupInterval: 30000,
            expiryDuration: 60000
        },
        enableCacheCleaning: true,
        defaultUploadOptions: {
            maxAttempts: 15,
            upload: true,
            compressOptions: { level: -1 }
        }
    };
    private cacheCleaningTimer?: number;
    public readonly key: string;

    public configure(options: StorageRocketOptions) {
        let q: { fa: { [key: string]: any }, k: string, v: any }[] = [{
            fa: this,
            k: "conf",
            v: options
        }];
        while (q.length) {
            const { fa, k, v } = q.shift()!;
            if (typeof v == "object") for (const [u, w] of Object.entries(v)) q.push({
                fa: fa[k],
                k: u,
                v: w
            });
            else fa[k] = v;
        }
    }

    constructor(storage: GameDataStorage<JSONValue>, options?: StorageRocketOptions) {
        this.storage = storage;
        if (options) this.configure(options);
        if (!options || options?.enableCacheCleaning == undefined) this.conf.enableCacheCleaning = true;
        this.key = this.storage.key;
    }

    public get conf(): StorageRocketConfigs {
        let self = this;
        return {
            cacheCleanupConfig: {
                set cleanupInterval(value: number) {
                    self.configs.cacheCleanupConfig.cleanupInterval = value;
                    if (self.cacheCleaningTimer) {
                        clearInterval(self.cacheCleaningTimer);
                        self.cacheCleaningTimer = setInterval(self.cleanupCache.bind(self), self.configs.cacheCleanupConfig.cleanupInterval);
                    }
                },
                get cleanupInterval(): number {
                    return self.configs.cacheCleanupConfig.cleanupInterval;
                },
                set expiryDuration(value: number) {
                    self.configs.cacheCleanupConfig.expiryDuration = value;
                },
                get expiryDuration(): number {
                    return self.configs.cacheCleanupConfig.expiryDuration;
                }
            },
            set enableCacheCleaning(value: boolean) {
                if (!value && self.cacheCleaningTimer) {
                    clearInterval(self.cacheCleaningTimer);
                    self.cacheCleaningTimer = undefined;
                }
                if (value && !self.cacheCleaningTimer) self.cacheCleaningTimer = setInterval(self.cleanupCache.bind(self), self.configs.cacheCleanupConfig.cleanupInterval);
            },
            get enableCacheCleaning(): boolean {
                return self.cacheCleaningTimer !== undefined;
            },
            defaultUploadOptions: this.configs.defaultUploadOptions
        };
    }

    private cleanupCache(): void {
        const now = Date.now();
        console.log("cleanup!"); // debug
        for (const [key, cacheEntry] of this._cache)
            if (now - cacheEntry.lastAccessed > this.configs.cacheCleanupConfig.expiryDuration && cacheEntry.sync) this._cache.delete(key);
    }

    private get readInterval(): number {
        return Math.min(60000 - ((Date.now() - this.r_restrictedTime) % 60000), 45000);
    }

    private get uploadInterval(): number {
        return Math.min(60000 - ((Date.now() - this.w_restrictedTime) % 60000), 45000);
    }

    /**
     * 获取**数据的value**
     * @param key 
     * @param maxAttempts 
     * @returns 
     */
    public get(key: string, maxAttempts?: number): Promise<JSONValue | undefined> {
        return new Promise(async (resolve) => {
            const cacheEntry = this._cache.get(key);
            if (cacheEntry) {
                cacheEntry.lastAccessed = Date.now();
                resolve(cacheEntry.data);
            } else this.read(key, maxAttempts).then((val) => resolve(val as JSONValue));
        });
    }

    public list(options: ListPageOptions, maxAttempts?: number): Promise<QueryList<JSONValue>> {
        return new Promise(async (resolve) => {
            this.read(undefined, maxAttempts, options).then((val) => resolve(new Proxy(val as QueryList<JSONValue>, {
                get: (target, prop: keyof QueryList<JSONValue>, receiver) => {
                    if (typeof target[prop] == "function")
                        return (...args: any[]) => {
                            let ret = Reflect.apply(target[prop] as Function, receiver, args);
                            if (prop == "getCurrentPage") return (ret as ReturnValue<JSONValue>[]).map((v) => {
                                if (v?.value) v.value = decompress(v.value);
                                return v;
                            });
                            return ret;
                        }
                    return Reflect.get(target, prop, receiver);
                }
            })));
        });
    }

    private execReadTask(key: string | undefined): void {
        const readEntry = this.readTasks.get(key);
        if (!readEntry) return;
        if (readEntry.tasks.length == 0) {
            this.readTasks.delete(key);
            return;
        }
        const remindOthers = () => {
            this.r_restrictedTime = 0;
            this.readTasks.forEach((v, k) => {
                if (k == key) return;
                clearTimeout(v.curExecTimeout);
                v.curExecTimeout = setTimeout(() => this.execReadTask(k), 0);
            });
        };
        const task = readEntry.tasks.at(-1)!;
        ((key == undefined ? this.storage.list(task.options!) : this.storage.get(key)) as Promise<QueryList<JSONValue> | ReturnValue<JSONValue>>).then((data) => {
            let decompressedData: JSONValue;
            if (key != undefined) {
                // @ts-ignore
                decompressedData = decompress(data?.value as CompressedData);
                this._cache.set(key, { sync: true, data: decompressedData, lastAccessed: Date.now() });
            }
            readEntry.tasks.forEach((t) => t.resolve(key == undefined ? data : decompressedData));
            this.readTasks.delete(key);
            if (this.r_restrictedTime) remindOthers();
        }).catch((reason: Error) => {
            if (LimitErrors.includes(reason.toString())) {
                console.log(`Data reading are limited by data storage read-action restrictions`);
                if (!this.r_restrictedTime) this.r_restrictedTime = Date.now();
                if (--task.remainingAttempts == 0) {
                    task.reject(new Error("Failed to read data from data storage"));
                    readEntry.tasks.pop();
                    if (readEntry.tasks.length == 0) this.readTasks.delete(key);
                }
            } else {
                task.reject(reason);
                readEntry.tasks.pop();
                if (readEntry.tasks.length == 0) this.readTasks.delete(key);
                if (this.r_restrictedTime) remindOthers();
            }
            if (this.readTasks.has(key)) readEntry.curExecTimeout = setTimeout(this.execReadTask, this.readInterval);
        });
    }

    private read<T = JSONValue | undefined | QueryList<JSONValue>>(key?: string, maxAttempts?: number, options?: ListPageOptions): Promise<T> {
        return new Promise(async (resolve, reject) => {
            const readEntry = this.readTasks.get(key);
            if (readEntry) {
                readEntry.tasks.push({
                    resolve,
                    reject,
                    remainingAttempts: maxAttempts ?? this.configs.defaultUploadOptions.maxAttempts,
                    options
                } as ReadTask);
                clearTimeout(readEntry.curExecTimeout);
                readEntry.curExecTimeout = setTimeout(() => this.execReadTask(key), 0);
            } else {
                this.readTasks.set(key, {
                    curExecTimeout: setTimeout(() => this.execReadTask(key), 0),
                    tasks: [{
                        resolve,
                        reject,
                        remainingAttempts: maxAttempts ?? this.configs.defaultUploadOptions.maxAttempts,
                        options
                    } as ReadTask]
                });
            }
        });
    }

    public set(key: string, value: JSONValue, options?: StorageRocketUploadOptions): Promise<void> {
        return new Promise((resolve) => {
            this._cache.set(key, { sync: false, data: value, lastAccessed: Date.now() });
            // debug++
            const v = compress(value, this.configs.defaultUploadOptions.compressOptions);
            console.log(JSON.stringify(v), (v as [boolean, string])[1].length);
            // ++debug
            if (options?.upload != false) this.upload(key, () => this.storage.set(key, compress(value, this.configs.defaultUploadOptions.compressOptions)), options).then(resolve);
            else resolve();
        });
    }

    /**
     * 更新**数据的value**
     * @param key 
     * @param handler 
     * @param options 
     * @returns 
     */
    public update(key: string, handler: (prevValue?: JSONValue) => JSONValue, options?: StorageRocketUploadOptions): Promise<void> {
        return new Promise((resolve) => {
            this.get(key).then((data) => {
                const value = handler(data);
                this._cache.set(key, { sync: false, data: value, lastAccessed: Date.now() });
                if (options?.upload != false) this.upload(key, () => this.storage.set(key, compress(value, this.configs.defaultUploadOptions.compressOptions)), options).then(resolve);
                else resolve();
            });
        });
    }

    public remove(key: string, options?: StorageRocketUploadOptions): Promise<ReturnValue<JSONValue>> {
        return new Promise((resolve) => {
            this._cache.set(key, { sync: false, data: undefined, lastAccessed: Date.now() }); // 防止同步前错误获取到已删除的数据
            if (options?.upload != false) this.upload(key, () => this.storage.remove(key), options, true).then(resolve);
            else resolve();
        });
    }

    public increment(key: string, value?: number, options?: StorageRocketUploadOptions): Promise<number> {
        return new Promise((resolve) => {
            let data = this._cache.get(key)?.data ?? 0;
            if (typeof data == "number") data += (value ?? 1);
            else throw new Error("{\"status\":\"SERVER_FETCH_ERROR\",\"code\":500,\"msg\":\"当前key已存储的value非数字类型，不可递增\"}");
            this._cache.set(key, { sync: false, data, lastAccessed: Date.now() });
            if (options?.upload != false) this.upload(key, () => this.storage.increment(key, value), options).then((val) => resolve(val));
            else resolve();
        });
    }

    private execUploadTask(key: string): void {
        const uploadEntry = this.uploadTasks.get(key);
        if (!uploadEntry) return;
        if (uploadEntry.tasks.length == 0) {
            this.uploadTasks.delete(key);
            return;
        }
        const remindOthers = () => {
            this.w_restrictedTime = 0;
            this.uploadTasks.forEach((v, k) => {
                if (k == key) return;
                clearTimeout(v.curExecTimeout);
                v.curExecTimeout = setTimeout(() => this.execUploadTask(k), 0);
            });
        };
        const task = uploadEntry.tasks.at(-1)!;
        task.callbackfn().then((ret) => {
            // @ts-ignore
            if (this._cache.has(key)) this._cache.get(key).sync = true;
            // @ts-ignore
            if (task.remove && ret && (ret as ReturnValue<JSONValue>).value) (ret as ReturnValue<JSONValue>).value = decompress((ret as ReturnValue<JSONValue>).value);
            uploadEntry.tasks.forEach((t) => t.resolve(ret));
            this.uploadTasks.delete(key);
            if (this.w_restrictedTime) remindOthers();
        }).catch((reason: Error) => {
            if (LimitErrors.includes(reason.toString())) {
                console.log(`Data updates are limited by data storage write-action restrictions`);
                if (!this.w_restrictedTime) this.w_restrictedTime = Date.now();
                if (--task.remainingAttempts == 0) {
                    task.reject(new Error("Failed to upload data to data storage"));
                    uploadEntry.tasks.pop();
                    if (uploadEntry.tasks.length == 0) this.uploadTasks.delete(key);
                    else uploadEntry.curExecTimeout = setTimeout(this.execUploadTask, this.uploadInterval);
                }
            } else {
                task.reject(reason);
                uploadEntry.tasks.pop();
                if (uploadEntry.tasks.length == 0) this.uploadTasks.delete(key);
                else uploadEntry.curExecTimeout = setTimeout(this.execUploadTask, this.uploadInterval);
                if (this.w_restrictedTime) remindOthers();
            }
        });
    }

    private upload<T = ReturnValue<JSONValue> | number | void>(key: string, callbackfn: () => Promise<T>, options?: StorageRocketUploadOptions, remove?: boolean): Promise<T> {
        return new Promise(async (resolve, reject) => {
            const uploadEntry = this.uploadTasks.get(key);
            if (uploadEntry) {
                uploadEntry.tasks.push({
                    resolve,
                    reject,
                    callbackfn,
                    remove,
                    remainingAttempts: options?.maxAttempts ?? this.configs.defaultUploadOptions.maxAttempts
                } as UploadTask);
                clearTimeout(uploadEntry.curExecTimeout);
                uploadEntry.curExecTimeout = setTimeout(() => this.execUploadTask(key), 0);
            } else {
                this.uploadTasks.set(key, {
                    curExecTimeout: setTimeout(() => this.execUploadTask(key), 0),
                    tasks: [{
                        resolve,
                        reject,
                        callbackfn,
                        remove,
                        remainingAttempts: options?.maxAttempts ?? this.configs.defaultUploadOptions.maxAttempts
                    } as UploadTask]
                });
            }
        });
    }

    public destroy(): Promise<void> {
        return this.storage.destroy();
    }

    public applyForUploadGroup(key: string): UploadGroup {
        return new UploadGroup(this, this.upload, key);
    }

    public get cache(): Map<string | undefined, CacheEntry> {
        return this._cache;
    }
}