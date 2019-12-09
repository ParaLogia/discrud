const path = require('path');

module.exports = {
  entry: './frontend/entry.jsx',
  output: {
    path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: [/\.jsx?$/],
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          // presets: ['env', 'react']
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '*'],
  }
};