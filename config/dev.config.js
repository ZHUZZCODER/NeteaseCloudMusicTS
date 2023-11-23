module.exports = {
  devServer: {
    proxy: {
      '/api/': {
        target: 'http://139.159.248.231:10000',
        changeOrigin: true,
        secure: false
      },
      '/request': {
        target: 'http://139.159.248.231:10000',
        changeOrigin: true,
        pathRewrite: { '^/request': '' }
      },
      '/reserveapi': {
        target: 'http://139.159.248.231:10000',
        changeOrigin: true,
        secure: false
      }
    }
  }
}
