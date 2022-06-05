module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/myGames/" : "/",
  transpileDependencies: ["vuetify"],

  chainWebpack: (config) => {
    config.module
      .rule("images")
      .test(/\.(png|jpg|gif)$/i)
      .use("url-loader")
      .loader("url-loader")
      .options({
        limit: false
      })
  }
};
