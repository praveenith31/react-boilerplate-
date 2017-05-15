var path = require('path');
var webpack = require('webpack');
var ignore = new webpack.IgnorePlugin(/\.svg$/);

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [ignore],
  resolve: {
    alias: {
      'redux': path.join(__dirname, 'node_modules/redux'),
      'react/lib/ReactMount': 'react-dom/lib/ReactMount'
    },
    extensions: ['', '.js']
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['react-hot', 'babel?' + JSON.stringify({presets: ['react', 'es2015']})],
      exclude: /node_modules/
    }]
  }
};
