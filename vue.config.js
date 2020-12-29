module.exports = {
    devServer: {
      overlay: {
        warnings: true,
        errors: true
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
    css :{
        loaderOptions : {
            sass : {
                additionalData : '@import "@/styles/base.scss"'
            }
        }
    }
}