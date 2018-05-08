const { resolve } = require('path');

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');

const rootFolder = resolve(`${ __dirname }/..`);
const srcFolder = `${ rootFolder }/src`;
const buildFolder = `${ rootFolder }/build`;

const config = {
  mode: 'development',

  context: srcFolder,

  devtool: 'source-map',
  target: 'web',

  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './index.js',
    '../assets/css/index.css',
  ],

  devServer: {
    hot: true,
    contentBase: buildFolder,
    publicPath: '/',
  },

  module: {
    rules: [

      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },

      {
        test: /\.js$/,
        loaders: [
          'babel-loader',
        ],
        exclude: /node_modules/,
      },

      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
        ],
      },

      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: 'images/[name].[ext]',
            },
          },
        ],
      },

    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: `${ __dirname }/../src/index.html`,
      filename: 'index.html',
      inject: 'body',
    }),

    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),

    new OpenBrowserPlugin({ url: 'http://localhost:8080' }),

    new webpack.HotModuleReplacementPlugin(),
  ],
};

module.exports = config;
