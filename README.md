# Storage Rocket 神岛版

## 介绍 Introduce

Storage Rocket是一个为优化数据库性能的npm包。它提供了数据缓存和上传组等功能，旨在帮助开发者在数据库读写限制下，实现更高效的数据处理。

Storage Rocket is an npm package designed to optimize database performance. It offers features such as data caching and batch uploading, aiming to assist developers in achieving more efficient data processing within database read/write limits.

## 使用 Usage

### 引入包 Import Package

在你的JavaScript或TypeScript文件中，通过`import`语句引入storage-rocket：

In your JavaScript or TypeScript file, import storage-rocket using the `import` statement:

```javascript
import * as StorageRocket from "@dao3fun/storage-rocket";
```

### 基本用法 Basic Usage

以下是一个简单的示例，展示了如何使用Storage Rocket的基本功能：

Here is a simple example demonstrating how to use the basic functions of Storage Rocket:

```javascript
// 示例代码，展示如何使用包提供的功能
const storageRocket = new StorageRocket(storage.getDataStorage("test"));
storageRocket.set("apple", 1);
storageRocket.set("banana", 2);
storageRocket.set("cherry", 3);
storageRocket.update("apple", (prevValue) => prevValue as number + 1);
storageRocket.remove("banana");
console.log(storageRocket.get("apple"));
const uploadGroup = storageRocket.applyForUploadGroup("apple");
uploadGroup.increment(10);
console.log(storageRocket.get("apple"));
uploadGroup.upload();
console.log(storageRocket.get("apple"), storageRocket.get("cherry"));
const list = await storageRocket.storage.list({
    cursor: 0
});
list.getCurrentPage().forEach((value) => {
    console.log(JSON.stringify(value));
});
```

## 贡献 Contribution

我们欢迎任何形式的贡献！如果你发现了bug，或者有任何改进建议，欢迎在[GitHub仓库](https://github.com/Qck320923/StorageRocket)上提交issue或pull request。

We welcome contributions in any form! If you find any bugs or have suggestions for improvement, please feel free to submit an issue or pull request on [the GitHub repository](https://github.com/Qck320923/StorageRocket).

## 许可证 License

storage-rocket 遵循MIT许可证。

storage-rocket follows the MIT License.