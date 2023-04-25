const TersetWebpackPlugin = require('terser-webpack-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')
module.exports = {
  mode: 'production',
  devtool: false,
  optimization: {
    minimize: true,
    minimizer: [
      //js压缩，丑化
      new TersetWebpackPlugin({
        //去除注释
        extractComments: false,
        terserOptions: {
          //去除console.log
          compress: {
            drop_console: true,
            pure_funcs: ['console.log']
          },
          format: {
            comments: false
          }
        }
      }),
      //css压缩
      new CssMinimizerPlugin(),
      //开启GZIP压缩
      new CompressionPlugin({
        test: /\.(jsx?|tsx?|css|less)$/,
        algorithm: 'gzip'
      })
    ]
  }
}
