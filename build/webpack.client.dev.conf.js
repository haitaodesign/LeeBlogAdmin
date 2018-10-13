'use stirct'
const webpack = require('webpack')
const merge = require('webpack-merge')
// const ExtractEextWebpackPlugin = require('extract-text-webpack-plugin')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const env = require('../config/dev.env')
const baseWebpackConfig = require('./webpack.base.conf')


const devWebpackConfig = merge(baseWebpackConfig, {
  module: {
    rules: [{
      test: /\.styl(us)?$/, // 正则匹配很重要，写错了会导致编译错误
      use: ['vue-style-loader', 'style-loader', 'css-loader', {
        loader: 'postcss-loader',
        options: {
          sourceMap: true
        }
      }, 'stylus-loader']
    },
    {
      test: /\.css$/,
      loader: ['style-loader', 'css-loader']
    }]
  },
  devServer: {
    port: 8088,
    host: '0.0.0.0',
    // 页面上显示编译错误
    overlay: {
      errors: true
    },
    // 自动打开浏览器
    open: true,
    hot: true
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': env
    }),
    new webpack.HotModuleReplacementPlugin(),
    new FriendlyErrorsWebpackPlugin({
      compilationSuccessInfo: {
        messages: ['You application is running here http://localhost:8088']
      },
      clearConsole: true
    }),
    new VueLoaderPlugin()
  ]
})

module.exports = devWebpackConfig
