import webpack from 'webpack';

const config = {
  entry: [
    './src/index'
  ],
  output: {
    path: __dirname + '/dist',
    filename: 'uuid.js'
  },
  module: {
    loaders: [{
      test: /\.js?$/,
      exclude: /node_modules/,
      loader: 'babel'
    }]
  },
  resolve: {
    extensions: ['', '.js']
  }
};

export default config;
