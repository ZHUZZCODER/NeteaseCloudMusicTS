const path = require('path')
const CracoLessPlugin = require('craco-less')
const resolve = (filepath) => path.resolve(__dirname, filepath)
const devConfig = require('./config/dev.config')
const proConfig = require('./config/pro.config')
const { merge } = require('webpack-merge')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin
    }
  ],
  webpack: {
    alias: {
      '@': resolve('src')
    },
    // plugins: [new BundleAnalyzerPlugin()],
    configure: (webpackConfig, { env, paths }) => {
      const mergeConfig = env === 'production' ? proConfig : {}

      return merge(webpackConfig, mergeConfig)
    }
  },
  devServer: (devServerConfig, { env, paths, proxy, allowedHost }) => {
    devServerConfig.proxy = devConfig.devServer.proxy
    return devServerConfig
  }
}
