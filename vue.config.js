const path = require('path')

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/weather-now/' : '/',
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/assets/styles/variables.scss";`
      },
      scss: {
        prependData: `@import "@/assets/styles/variables.scss";`
      }
    }
  }
}
