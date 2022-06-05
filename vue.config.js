module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
  ? '/myGames/'
  : '/',
  transpileDependencies: [
    'vuetify'
  ]
}
