const path = require('path')
module.exports = {
  mode: process.env.NODE_ENV || 'production', // development || production
  target: 'web',
  entry: {
    app: path.join(__dirname, '../client/main.js')
  },
  output: {
    filename: 'bundle.[hash:8].js',
    path: path.join(__dirname, '../dist')
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      '@views': path.resolve(__dirname, '..', 'client/views/components'),
      '@': path.resolve(__dirname, '..', 'client/views'),
      '@com': path.resolve(__dirname, '..', 'client/components'),
      '@api': path.resolve(__dirname, '..', 'client/api')
    }
  },
  module: {
    rules: [{
      test: /\.(vue|js|jsx)/,
      loader: 'eslint-loader',
      exclude: /node_modules/,
      enforce: 'pre'
    }, {
      test: /\.vue$/,
      loader: 'vue-loader'
    }, {
      test: /\.js$/,
      include: [path.join(__dirname, '..', 'client')]
    },
    {
      test: /\.jsx$/,
      loader: 'babel-loader'
    }, {
      test: /\.(gif|jpg|jpeg|png|svg)$/,
      use: [{
        loader: 'url-loader',
        options: {
          limit: 1024,
          name: 'resources/[path][name].[hash:8].[ext]'
        }
      }]
    }, {
      test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
      loader: 'url-loader',
      options: {
        limit: 10000,
        name: 'resources/[path][name].[hash:8].[ext]'
      }
    }]
  }
}
