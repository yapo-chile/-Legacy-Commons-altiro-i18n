const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

module.exports = {
  entry: './i18n/index.js',
  output: {
    filename: 'altiro-i18n.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  resolve: {
    modules: [path.resolve('./node_modules'), path.resolve('./i18n')],
    extensions: ['.json', '.js']
  },
  plugins: [
    new UglifyJsPlugin({ minimize: true })
  ]
};