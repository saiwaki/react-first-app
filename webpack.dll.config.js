const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: {
    vendor: ['react', 'react-dom', 'react-router-dom']
  },

  output: {
    path: path.join(__dirname, 'public'),
    filename: '[name].dll.js',
    library: '[name]_library'
  },

  plugins: [
    new webpack.DllPlugin({
      path: path.join(__dirname, 'public', '[name]-manifest.json'),
      name: '[name]_library'
    })
  ]
}
