const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',

  entry: {
    javascript: './source/app.js'
  },

  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'public')
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: '',
      inject: false,
      filename: 'index.html',
      template: './source/index.html'
    }),
    new webpack.DllReferencePlugin({
      context: __dirname,
      manifest: require('./public/vendor-manifest.json')
    })
  ],

  // optimization: {
  //   splitChunks: {
  //     cacheGroups: {
  //       // react.jsに分離
  //       react: {
  //         test: /react/,
  //         name: 'react',
  //         chunks: 'all',
  //       },
  //       // core.jsに分離
  //       core: {
  //         test: /react-helmet|core-js|jss|history|matarial-ui|lodash|moment|rollbar|radium|prefixer|\.io|platform|axios/,
  //         name: 'core',
  //         chunks: 'all',
  //       },
  //     },
  //   },
  // },

  // externals: {
  //   "react": "React",
  //   "react-dom": "ReactDOM",
  //   "react-router-dom": "BrowserRouter"
  // },

  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    port: 3033,
    historyApiFallback: true
  },

  performance: { hints: false }
}
