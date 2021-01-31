module.exports = {
    devServer: {
      proxy: {

        '/': {
          target: process.env.BaseUrl,
          ws: true,
          changeOrigin: true
        },

        '^/api': {
          target: process.env.ApiUrl,
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