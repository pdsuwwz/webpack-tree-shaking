# webpack-tree-shaking

## Startup

检验 `tree shaking` 是否有效：

1. 第1次运行打包服务 `pnpm build`
2. 在 `main.js` 文件中仅有 `func-a` 模块，没有 `func-b` 模块
3. 此时将 `func-b.js` 中的注释 `/*#__PURE__*/` 去掉后第2次打包
4. 第2次打包后的 `main.js` 文件中均含有 `func-a` 和 `func-b` 模块

以上，即可以证明 `tree shaking` 的有效性。
