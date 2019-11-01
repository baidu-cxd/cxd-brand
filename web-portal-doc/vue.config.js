const path = require('path');
function resolve (dir) {
    return path.join(__dirname, dir)
}
module.exports = {
  css: {
    loaderOptions: {
      stylus: {
        import: ['~@./style/designToken.styl']
      }
    }
  },
  devServer: {
    proxy: {
        '/api/':{
           target:'http://localhost:3000/api/',
           changeOrigin:true,//允许跨域
           pathRewrite:{
             '^/api/': ''
           }
         }
     },
  },
  lintOnSave: true,
  chainWebpack: (config)=>{
      config.resolve.alias
          .set('@.', resolve('design-system'))
          .set('@.style', resolve('design-system/style'))
          .set('@.components', resolve('design-system/components'))
          .set('@.icon', resolve('design-system/resource/icon'))
          .set('@.img', resolve('design-system/resource/img'))
          .set('@.lottie', resolve('design-system/resource/lottie-json'))
          .set('@', resolve('src'))
  }
}