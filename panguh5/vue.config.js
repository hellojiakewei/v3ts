const path = require('path');
const packageJson = require('./package.json');
function resolve(dir){
    return path.join(__dirname,dir)
}

let cdnDomain='/'
if (process.env.NODE_ENV === 'production' && process.env.ENV === 'production'){
    cdnDomain = `//static.doushen.com/image/public/${packageJson.name}`
}else{
    cdnDomain='/pangu'
}
module.exports = {
    publicPath: cdnDomain,
    outputDir:'dist',
    assetsDir:'static',
    lintOnSave: false,
    productionSourceMap: false,
    css: {
        loaderOptions: {
            scss: {
                prependData: `@import "~@/styles/index.scss";`
            }
        }
    },
    chainWebpack: config => {
        config
          .plugin('html')
          .tap(args => {
            args[0].title= '豆神大语文提分班-迎新'
            return args
          })
      },
    devServer: {
        port: process.env.PORT || process.env.PORT,
        open: true,
        overlay: {
            warnings: false,
            errors: true
        }
    },
}