const path = require('path');

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData : `@import "@/assets/styles/variables.scss";`
      },
      scss: {
        prependData : `@import "@/assets/styles/variables.scss";`
      }
    }
  }
};
