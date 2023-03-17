const path = require('path')
const CracoLessPlugin = require('craco-less')
const resolve = (filepath) => path.resolve(__dirname, filepath)

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
      }
    }
  },
  plugins: [
    {
      plugin: CracoLessPlugin
    }
  ],
  webpack: {
    alias: {
      '@': resolve('src')
    }
  }
}
