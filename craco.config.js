const path = require('path')
const CracoLessPlugin = require('craco-less')
const resolve = (filepath) => path.resolve(__dirname, filepath)

module.exports = {
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
