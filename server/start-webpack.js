
console.info('starting webpack');

var Webpack = require('webpack');

var compiler = new Webpack({
  entry: {
    "index": [
       __dirname + '/../client/index.js'
    ],
    "david": [
      __dirname + '/../client/david.html'
    ]
  },
  output: {
    path: __dirname + '/../built/client/',
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.html$/,
        loader: 'file-loader?name=[name].[ext]'
      }
    ]
  },
  watch: true
});

compiler.watch({
    aggregateTimeout: 300,
    poll: true
}, function(err, stats) {});
