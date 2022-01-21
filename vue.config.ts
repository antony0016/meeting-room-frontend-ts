module.exports = {
  devServer: {
    proxy: process.env.SERVER_DOMAIN,
    disableHostCheck: true,
    // publicPath: "/",
  },
  publicPath: process.env.PUBLIC_PATH,
  pages: {
    index: {
      entry: "src/main.ts",
    },
  },
  runtimeCompiler: true,
  // NOTE: set alias via `configureWebpack` or `chainWebpack`
  // configureWebpack: {
  //   resolve: {
  //     alias: {
  //       "balm-ui-plus": "balm-ui/dist/balm-ui-plus.js",
  //       "balm-ui-css": "balm-ui/dist/balm-ui.css",
  //     },
  //   },
  // },
};
