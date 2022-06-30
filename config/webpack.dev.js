var webpackMerge = require('webpack-merge');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');

module.exports = webpackMerge(commonConfig, {
  devtool: 'source-map',
  mode: "development",
  output: {
    path: helpers.root('dist'),
    publicPath: '//localhost:8080/',   
    filename: '[name].[chunkhash].js',
	chunkFilename: '[name].[chunkhash].js',
  },

  plugins: [
    new MiniCssExtractPlugin('[name].css')
  ],

  devServer: {
    historyApiFallback: true,
    stats: 'minimal'
  }
});