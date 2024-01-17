module.exports = {
  devServer: {
    proxy: {
      '/api/': {
        target: 'http://www.zhuzzcoder.top:9999',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        },
        secure: false
      },
      '/request': {
        target: 'http://www.zhuzzcoder.top:3000',
        changeOrigin: true,
        pathRewrite: { '^/request': '' }
      },
      '/reserveapi': {
        target: 'http://www.zhuzzcoder.top:10000',
        changeOrigin: true,
        secure: false
      }
    }
  }
}
