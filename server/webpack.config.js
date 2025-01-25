//@ts-ignore
const path = require("path");

/** @type import('webpack').Configuration */
const webpackConfig = {
  resolve: {
    /**
     * 【完整编译配置】说明
     *
     * 本配置以当前文件夹（server）下的dist目录为基准目录进行配置。
     * 别名配置直接指向dist目录下的编译后文件/源代码目录。
     *
     * 注意事项：
     * - 如果修改了`tsconfig.json`文件中的`rootDir`属性，TypeScript编译器（tsc）在dist目录下输出的文件路径将会相应改变。
     * - 为避免路径配置出错，请仅修改`path.resolve`方法中的第三个参数。
     */
    alias: {
      "@": path.resolve(__dirname, "dist", "server/src"), // 指向于 server/dist/server/src 目录
      "@shares": path.resolve(__dirname, "dist", "shares"), // 指向于 server/dist/shares 目录
    },

    /**
     * 【HMR编译配置】说明
     *
     * 本配置以当前文件夹（server）为基准目录。
     * 别名配置直接指向源代码目录/文件。
     */
    /** 
        alias: {
            '@': path.resolve(__dirname, 'src'),  // 指向于 server/src 目录
            '@shares': path.resolve(__dirname, '../shares'),  // 指向于 shares 目录
        },
        */
  },
};
module.exports = webpackConfig;
