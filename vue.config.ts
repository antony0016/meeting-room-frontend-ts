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
};
