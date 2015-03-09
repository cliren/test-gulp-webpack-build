var path = require('path');
var webpack = require('webpack');
var nodeModulesPath = path.join(__dirname, 'node_modules');
var bowerComponentsPath = path.join(__dirname, 'bower_components');

module.exports = {
  entry: './src/main.js',
  output: {
    path: __dirname + "/dist",
    pathinfo: true,
    filename: 'main.js',
    library: 'precisionMap',
    libraryTarget: 'umd'
  },
  module: {
    loaders: [
      {test: /\.less$/, loader: 'style!css!less'}
    ],
    noParse: []
  },
  resolve: {
    root: [
      nodeModulesPath,
      bowerComponentsPath],
    alias: {
    },
    extensions: ['',
      '.js',
      '.css']
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin()
  ]
};