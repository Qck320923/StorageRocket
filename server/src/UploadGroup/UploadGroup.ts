import { StorageRocket } from "@/StorageRocket/StorageRocket";
import { StorageRocketUploadOptions } from "@/StorageRocket/StorageDefinition";

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