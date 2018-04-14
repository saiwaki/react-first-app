const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production',

  entry: {
    javascript: './source/app.js'
  },

  output: {
    filename: './bundle.js',
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
    })
  ],

  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    port: 3033,
    historyApiFallback: true
  },

  performance: { hints: false }
}
