module.exports = {
  /* 部署⽣产环境和开发环境下的URL：可对当前环境进⾏区分，baseUrl 从 Vue CLI 3.3 起已弃⽤，要使⽤
   publicPath */
  /* baseUrl: process.env.NODE_ENV === 'production' ? './' : '/' */
  publicPath: process.env.NODE_ENV === "production" ? "/public/" : "./",
  /* 输出⽂件⽬录：在npm run build时，⽣成⽂件的⽬录名称 */
  outputDir: "dist",
  /* 放置⽣成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) ⽬录 */
  assetsDir: "assets",
  /* 是否在构建⽣产包时⽣成 sourceMap ⽂件，false将提⾼构建速度 */
  productionSourceMap: false,
  /* 默认情况下，⽣成的静态资源在它们的⽂件名中包含了 hash 以便更好的控制缓存，你可以通过将这个选项设为
   false 来关闭⽂件名哈希。(false的时候就是让原来的⽂件名不改变) */
  filenameHashing: false,
  /* 代码保存时进⾏eslint检测 */
  lintOnSave: true,
  /* webpack-dev-server 相关配置 */
  devServer: {
    /* ⾃动打开浏览器 */
    open: true,
    /* 设置为0.0.0.0则所有的地址均能访问 */
    host: "0.0.0.0",
    port: 8080,
    https: false,
    hotOnly: false,
    /* 使⽤代理 */
    proxy: {
      "/api": {
        /* ⽬标代理服务器地址 */
        target: "http://localhost:8443",
        /* 允许跨域 */
        changeOrigin: true,
        pathRewrite: {
          "^/api": "",
        },
      },
    },
  },
};
