import { compress, decompress } from "@/Compress/Compress";

export interface CacheEntry {
    sync: boolean;
    data?: JSONValue;
    lastAccessed: number;
}

export interface StorageRocketOptions {
    cacheCleanupConfig: {
        cleanupInterval?: number;
        expiryDuration?: number;
    };
    enableCacheCleaning?: boolean;
    defaultUploadOptions?: StorageRocketUploadOptions;
}

export interface StorageRocketConfigs {
    cacheCleanupConfig: {
        cleanupInterval: number;
        expiryDuration: number;
    };
    enableCacheCleaning: boolean;
    defaultUploadOptions: StorageRocketUploadConfigs;
}

export interface StorageRocketUploadConfigs {
    maxAttempts: number;
    upload: boolean;
    compressOptions: pako.DeflateFunctionOptions;
}

export interface StorageRocketUploadOptions {
    maxAttempts?: number;
    upload?: boolean;
    compressOptions?: pako.DeflateFunctionOptions;
}

export type ReadTask = {
    resolve: (value: JSONValue | undefined | QueryList<JSONValue>) => void,
    reject: (reason?: any) => void,
    remainingAttempts: number,
    options?: ListPageOptions
};

export type UploadTask<T = ReturnValue<JSONValue> | number | void> = {
    resolve: (value: T) => void,
    reject: (reason?: any) => void,
    remainingAttempts: number,
    remove?: boolean, // 标记remove操作，解压返回值
    callbackfn: () => Promise<T>
};

export const LimitErrors = [
    "{\"status\":\"REQUEST_THROTTLED\",\"code\":429,\"msg\":\"Too Many Requests.\"}",
    "{\"status\":\"SERVER_FETCH_ERROR\",\"code\":500,\"msg\":\"读频率过高，触发限流\"}",
    "{\"status\":\"SERVER_FETCH_ERROR\",\"code\":500,\"msg\":\"写频率过高，触发限流\"}"
];
