module.exports = {
    devServer: {
      overlay: {
        warnings: true,
        errors: true
      }
    },
    lintOnSave: process.env.NODE_ENV !== 'production',
    css :{
        loaderOptions : {
            sass : {
                additionalData : '@import "@/styles/base.scss"'
            }
        }
    },

  //   chainWebpack: config => {
  //     config
  //         .plugin('html')
  //         .tap(args => {
  //             args[0].title = process.env.Site_Name;
  //             return args;
  //         })
  // }

  }