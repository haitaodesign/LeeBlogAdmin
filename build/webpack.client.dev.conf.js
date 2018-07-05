'use stirct'
const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const ExtractEextWebpackPlugin = require('extract-text-webpack-plugin')
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
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve('./client', `index.html`),
      inject: true
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
})

module.exports = devWebpackConfig
