'use strict'
const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const ExtractEextWebpackPlugin = require('extract-text-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const env = require('../config/prod.env')
const baseWebpackConfig = require('./webpack.base.conf')

const prodWebpackConfig = merge(baseWebpackConfig, {
  module: {
    rules: [{
      test: /\.styl$/,
      use: ExtractEextWebpackPlugin.extract({
        fallback: 'style-loader',
        use: ['css-loader', {
          loader: 'postcss-loader',
          options: {
            sourceMap: true
          }
        }, 'stylus-loader']
      })
    }, {
      test: /\.css$/,
      loader: ['style-loader', 'css-loader']
    }]
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    },
    runtimeChunk: true
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': env
    }),
    // contenthash报错
    new ExtractEextWebpackPlugin({
      filename: 'styles.[id].[name].css',
      allChunks: true
    }),
    new CleanWebpackPlugin(['dist'], {
      // PS：必须正确指定删除的根目录，否则删除文件无效
      root: path.resolve(__dirname, '../'),
      verbose: true,
      dry: false
    })
  ]
})

module.exports = prodWebpackConfig
