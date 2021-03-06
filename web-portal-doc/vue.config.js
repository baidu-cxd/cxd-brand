const path = require('path');
function resolve (dir) {
    return path.join(__dirname, dir)
}
module.exports = {
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.md$/,
          loader: 'raw-loader'
        }
      ]
    }
  },
  css: {
    loaderOptions: {
      stylus: {
        import: ['~@/style/designToken.styl']
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
        .set('@', resolve('src'))
        .set('@doc', resolve('doc'))
  }
}