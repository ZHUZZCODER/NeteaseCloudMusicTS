module.exports = {
  devServer: {
    proxy: {
      '/api/': {
        target: 'http://8.134.158.222:9999',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        },
        secure: false
      },
      '/request': {
        target: 'http://8.134.158.222:3000',
        changeOrigin: true,
        pathRewrite: { '^/request': '' }
      },
      '/reserveapi': {
        target: 'http://8.134.158.222:10000',
        changeOrigin: true,
        secure: false
      }
    }
  }
}
