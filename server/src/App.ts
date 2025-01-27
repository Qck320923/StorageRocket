export interface CacheEntry {
    sync: boolean;
    data?: JSONValue;
    lastAccessed: number;
}

export interface StorageRocketOptions {
    cleanupInterval: number;
    expiryDuration: number;
    enableCacheCleaning: boolean;
}

export interface StorageRocketUploadOptions {
    maxAttempts?: number;
    upload?: boolean;
}

const LimitErrors = [
    "{\"status\":\"REQUEST_THROTTLED\",\"code\":429,\"msg\":\"Too Many Requests.\"}",
    "{\"status\":\"SERVER_FETCH_ERROR\",\"code\":500,\"msg\":\"读频率过高，触发限流\"}",
    "{\"status\":\"SERVER_FETCH_ERROR\",\"code\":500,\"msg\":\"写频率过高，触发限流\"}"
];

export class UploadGroup {
    public readonly storageRocket: StorageRocket;
    public readonly upload: (options?: StorageRocketUploadOptions) => Promise<ReturnValue<JSONValue> | void> | undefined;
    public readonly key;

    constructor(storageRocket: StorageRocket, upload: <T>(key: string, callbackfn: () => Promise<T>, options?: StorageRocketUploadOptions) => Promise<T>, key: string) {
        this.storageRocket = storageRocket;
        this.upload = (options?: StorageRocketUploadOptions) => {
            const cacheEntry = this.storageRocket.cache.get(key);
            if (cacheEntry)
                if (cacheEntry.sync) throw new Error("Cannot upload data that has already been synchronized");
                else {
                    const data = cacheEntry.data;
                    if (data == undefined) return upload(key, () => this.storageRocket.storage.remove(key), options);
                    else return upload(key, () => this.storageRocket.storage.set(key, data), options);
                }
        };
        this.key = key;
    }

    public set(value: JSONValue, maxAttempts?: number): Promise<void> {
        return this.storageRocket.set(this.key, value, { maxAttempts, upload: false });
    }

    public update(handler: (prevValue?: JSONValue) => JSONValue, maxAttempts?: number): Promise<void> {
        return this.storageRocket.update(this.key, handler, { maxAttempts, upload: false });
    }

    public increment(value?: number, maxAttempts?: number): Promise<number> {
        return this.storageRocket.increment(this.key, value, { maxAttempts, upload: false });
    }
}

export type Task<T = ReturnValue<JSONValue> | number | void> = {
    resolve: (value: T) => void,
    reject: (reason?: any) => void,
    remainingAttempts: number,
    callbackfn: () => Promise<T>
};

export class StorageRocket {
    public storage: GameDataStorage<JSONValue>;
    private _cache: Map<string, CacheEntry> = new Map();
    public cleanupInterval: number = 30000;
    public expiryDuration: number = 60000;
    public uploadTasks: Map<string, {
        curExecTimeout: number,
        tasks: Task[]
    }> = new Map();
    private restricted: boolean = false;
    public readonly key: string;

    constructor(storage: GameDataStorage<JSONValue>, options?: StorageRocketOptions) {
        this.storage = storage;
        this.cleanupInterval = options?.cleanupInterval ?? this.cleanupInterval;
        this.expiryDuration = options?.expiryDuration ?? this.expiryDuration;
        if (options?.enableCacheCleaning) setInterval(this.cleanupCache.bind(this), this.cleanupInterval);
        this.key = this.storage.key;
    }

    private cleanupCache(): void {
        const now = Date.now();
        for (const [key, cacheEntry] of this._cache)
            if (now - cacheEntry.lastAccessed > this.expiryDuration && cacheEntry.sync) this._cache.delete(key);
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
            } else {
                let attempts = 0;
                while (attempts < (maxAttempts ?? 15)) {
                    try {
                        const data = await this.storage.get(key);
                        this._cache.set(key, { sync: true, data: data?.value, lastAccessed: Date.now() });
                        resolve(data?.value);
                        return;
                    } catch (e) {
                        // @ts-ignore
                        if (LimitErrors.includes(e.toString())) console.log(`Data updates are limited by data storage read-action restrictions`);
                        else throw e;
                        attempts++;
                        await sleep(10000);
                    };
                }
                throw new Error("Failed to get data from data storage");
            }
        });
    }

    public list(options: ListPageOptions): Promise<QueryList<JSONValue>> {
        return this.storage.list(options);
    }

    public set(key: string, value: JSONValue, options?: StorageRocketUploadOptions): Promise<void> {
        return new Promise((resolve) => {
            this._cache.set(key, { sync: false, data: value, lastAccessed: Date.now() });
            if (options?.upload != false) this.upload(key, () => this.storage.set(key, value), options).then(resolve);
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
                if (options?.upload != false) this.upload(key, () => this.storage.update(key, () => value), options).then(resolve);
                else resolve();
            });
        });
    }

    public remove(key: string, options?: StorageRocketUploadOptions): Promise<ReturnValue<JSONValue>> {
        return new Promise((resolve) => {
            this._cache.set(key, { sync: false, data: undefined, lastAccessed: Date.now() }); // 防止同步前错误获取到已删除的数据
            if (options?.upload != false) this.upload(key, () => this.storage.remove(key), options).then(resolve);
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
            this.restricted = false;
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
            uploadEntry.tasks.forEach((t) => t.resolve(ret));
            this.uploadTasks.delete(key);
            if (this.restricted) remindOthers();
        }).catch((reason: Error) => {
            // @ts-ignore
            if (LimitErrors.includes(reason.toString())) {
                console.log(`Data updates are limited by data storage write-action restrictions`);
                if (--task.remainingAttempts == 0) {
                    task.reject(new Error("Failed to upload data to data storage"));
                    uploadEntry.tasks.pop();
                    if (uploadEntry.tasks.length == 0) this.uploadTasks.delete(key);
                    else uploadEntry.curExecTimeout = setTimeout(this.execUploadTask, 10000);
                }
            } else {
                task.reject(reason);
                uploadEntry.tasks.pop();
                if (uploadEntry.tasks.length == 0) this.uploadTasks.delete(key);
                else uploadEntry.curExecTimeout = setTimeout(this.execUploadTask, 10000);
                if (this.restricted) remindOthers();
            }
        });
    }
    private upload<T = ReturnValue<JSONValue> | number | void>(key: string, callbackfn: () => Promise<T>, options?: StorageRocketUploadOptions): Promise<T> {
        return new Promise(async (resolve, reject) => {
            const uploadEntry = this.uploadTasks.get(key);
            if (uploadEntry) {
                uploadEntry.tasks.push({
                    resolve,
                    reject,
                    callbackfn,
                    remainingAttempts: options?.maxAttempts ?? 15
                } as Task);
                clearTimeout(uploadEntry.curExecTimeout);
                uploadEntry.curExecTimeout = setTimeout(() => this.execUploadTask(key), 0);
            } else {
                this.uploadTasks.set(key, {
                    curExecTimeout: setTimeout(() => this.execUploadTask(key), 0),
                    tasks: [{
                        resolve,
                        reject,
                        callbackfn,
                        remainingAttempts: options?.maxAttempts ?? 15
                    } as Task]
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

    public get cache(): Map<string, CacheEntry> {
        return this._cache;
    }
}