import { UploadGroup } from "./UploadGroup/UploadGroup";
import { StorageRocket } from "./StorageRocket/StorageRocket";
import { CacheEntry, StorageRocketOptions, StorageRocketUploadOptions } from "./StorageRocket/StorageDefinition";

/* (async function () {
    const storageRocket = new StorageRocket(storage.getDataStorage("test"), {
        expiryDuration: 0,
        cleanupInterval: 500,
        enableCacheCleaning: true
    });
    await storageRocket.set("k1", "Hello, world!");
    console.log("waiting");
    while (storageRocket.cache.has("k1")) await sleep(1000);
    console.log(await storageRocket.get("k1"));
})(); */

export { UploadGroup, StorageRocket, CacheEntry, StorageRocketOptions, StorageRocketUploadOptions };