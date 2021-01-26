let baseUrl = require("./src/helpers/index").baseUrl,
    apiUrl = require("./src/helpers/index").apiUrl

module.exports = {
    devServer: {
      proxy: {

        '/': {
          target: baseUrl,
          ws: true,
          changeOrigin: true
        },

        '^/api': {
          target: apiUrl,
          ws: true,
          changeOrigin: true
        }
      },
      overlay: {
        warnings: true,
        errors: true
      }
    },
    css :{
        loaderOptions : {
            scss : {
                additionalData : '@import "~@/style/base.scss";'
            }
        }
    }
}