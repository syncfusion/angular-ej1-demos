var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
var helpers = require('./helpers');
var path = require('path');
const devMode = process.env.NODE_ENV !== 'production'

module.exports = {
  entry: {

    'polyfills': './app/polyfills.ts',
    'vendor': './app/vendor.ts',
    'main': './app/main.ts'
  },

  resolve: {
    extensions: ['.ts', '.js'],
    alias: {
      jquery: "jquery/src/jquery"
    }
  },
 
  optimization: {
    splitChunks: {
      chunks (chunk) {
        // exclude `my-excluded-chunk`
        return chunk.name !== 'my-excluded-chunk';
      }
    }
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        loaders: [
          {
            loader: 'awesome-typescript-loader',
            options: { configFileName: helpers.root('app', 'tsconfig.json') }
          }, 'angular2-template-loader', 'angular2-router-loader'
        ]
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.(png|jpe?g|gif|svg|cur|woff|woff2|ttf|eot|ico)$/,
        loader: 'file-loader?name=assets/[name].[hash].[ext]'
      },
      {
        test: /\.css$/,
        exclude: helpers.root('app'),
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
					{ loader: 'css-loader', options: { sourceMap: true } },       
      ]        
      },
      {
        test: /\.css$/,
        include: helpers.root('app'),
        loader: 'raw-loader'
      }
    ]
  },

  plugins: [
    // Workaround for angular/angular#11580
    new webpack.ContextReplacementPlugin(
      /angular(\\|\/)core(\\|\/)@angular/,
      path.resolve(__dirname, '../src')
    ),

    new HtmlWebpackPlugin({
      template: 'app/index.html'
    })
  ]
};

