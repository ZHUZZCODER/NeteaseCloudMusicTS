const path = require('path')
const CracoLessPlugin = require('craco-less')
const resolve = (filepath) => path.resolve(__dirname, filepath)

module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://139.159.248.231:10000',
        changeOrigin: true,
        pathRewrite: { '^/api': '' }
      },
      '/apiplay': {
        target: 'https://csm.sayqz.com/api/',
        changeOrigin: true,
        pathRewrite: { '^/apiplay': '' },
        secure: false
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
