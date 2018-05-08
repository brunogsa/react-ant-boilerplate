const { resolve } = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const rootFolder = resolve(`${ __dirname }/..`);
const srcFolder = `${ rootFolder }/src`;
const distFolder = `${ rootFolder }/dist`;

const config = {
  mode: 'production',

  context: srcFolder,

  devtool: 'source-map',
  target: 'web',

  entry: [
    './index.js',
    '../assets/css/index.css',
  ],

  output: {
    path: distFolder,
    publicPath: '',
    filename: 'bundle.js',
  },

  module: {
    rules: [

      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },

      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,

          {
            loader: 'css-loader',
            options: {
              sourceMap: false,
              minimize: true,
            },
          },
        ],
      },

      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
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
      template: `${ srcFolder }/index.html`,
      filename: 'index.html',
      inject: 'body',

      minify: {
        collapseWhitespace: true,
        collapseInlineTagWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
      },
    }),

    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],

  optimization: {
    minimize: true,

    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: false,

        uglifyOptions: {
          compress: {
            warnings: false,
            conditionals: true,
            unused: true,
            comparisons: true,
            sequences: true,
            dead_code: true,
            evaluate: true,
            if_return: true,
            join_vars: true,
          },

          output: {
            comments: false,
          },
        },
      }),

      new OptimizeCSSAssetsPlugin({}),
    ],
  },
};

module.exports = config;
