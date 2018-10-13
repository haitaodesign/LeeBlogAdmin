'use strict'
const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const env = require('../config/prod.env')
const baseWebpackConfig = require('./webpack.base.conf')

const prodWebpackConfig = merge(baseWebpackConfig, {
  module: {
    rules: [{
      test: /\.styl(us)?$/,
      // use: MiniCssExtractPlugin.extract({
      //   fallback: 'vue-style-loader',
      //   use: ['css-loader', {
      //     loader: 'postcss-loader',
      //     options: {
      //       sourceMap: true
      //     }
      //   }, 'stylus-loader']
      // })
      use: [ MiniCssExtractPlugin.loader = 'vue-style-loader', {
        loader: 'style-loader'
      }, {
        loader: 'css-loader'
      }, {
        loader: 'stylus-loader'
      }]
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
    new MiniCssExtractPlugin({
      filename: 'styles.[name].css',
      allChunks: true
    }),
    new CleanWebpackPlugin(['dist'], {
      // PS：必须正确指定删除的根目录，否则删除文件无效
      root: path.resolve(__dirname, '../'),
      verbose: true,
      dry: false
    }),
    new VueLoaderPlugin()
  ]
})

module.exports = prodWebpackConfig
