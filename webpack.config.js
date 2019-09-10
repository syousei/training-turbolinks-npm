const CopyWebpackPlugin = require('copy-webpack-plugin')
const path = require('path');
const webpack = require('webpack');
const WriteFilePlugin = require('write-file-webpack-plugin');

module.exports = (env, argv) => ({
  mode: process.env.NODE_ENV || 'development',
  watch: false,
  watchOptions: {
    ignored: /node_modules/
  },
  devtool: 'source-map',
  entry: './src/assets/js/index.js',
  output: {
    path: path.join(__dirname, './dist/assets'),
    filename: 'js/bundle.js',
  },
  plugins: [
    new CopyWebpackPlugin(
      [
        {
          context: './src',
          from: '**/*.html',
          to: '../',
        },
      ],
    ),
    new CopyWebpackPlugin(
      [
        {
          context: './src/assets/images',
          from: '**/*',
          to: './images',
        },
      ],
    ),
    new WriteFilePlugin(),
  ],
});
