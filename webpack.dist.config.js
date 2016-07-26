var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: './src/components/Root/Root.jsx',

  output: {
    library: 'ReactGallery',
    libraryTarget: 'umd',
    path: path.join(__dirname, 'dist'),
    filename: 'dc-react-gallery.js'
  },

  module: {
    loaders: [,
      { test: /\.css$/, loader: 'style!css!postcss'},
      {test: /\.jsx$/, loaders: ['babel']},
      {test: /\.js$/, loaders: ['babel'], exclude: /node_modules/}
    ]
  },

  postcss: () => [require('lost'), require('postcss-nested')],

  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  
  node: {
    Buffer: false
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ]
};