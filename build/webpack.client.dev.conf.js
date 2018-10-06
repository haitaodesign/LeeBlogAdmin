'use stirct'
const webpack = require('webpack')
const merge = require('webpack-merge')
// const ExtractEextWebpackPlugin = require('extract-text-webpack-plugin')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const env = require('../config/dev.env')
const baseWebpackConfig = require('./webpack.base.conf')

const devWebpackConfig = merge(baseWebpackConfig, {
  module: {
    rules: [{
      test: /\.(styl)$/,
      use: ['style-loader', 'css-loader', {
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
    })
  ]
})

module.exports = devWebpackConfig
