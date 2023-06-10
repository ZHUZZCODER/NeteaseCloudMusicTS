module.exports = {
  devServer: {
    proxy: {
      '/api/': {
        target: 'https://csm.sayqz.com',
        changeOrigin: true,
        secure: false
      },
      '/request': {
        target: 'http://139.159.248.231:10000',
        changeOrigin: true,
        pathRewrite: { '^/request': '' }
      },
      '/reserveapi': {
        target: 'https://m.csm.sayqz.com/api.php',
        changeOrigin: true,
        secure: false
      }
    }
  }
}
