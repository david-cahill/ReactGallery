module.exports = {
  entry: [
    'babel-polyfill',
    './demo/example.jsx'
  ],
  output: {
      path: __dirname + '/build',
    filename: 'bundle.js'
  },
  plugins: [],
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      { test: /\.css$/,
        loader: 'style!css!postcss'
      }
    ]
  },
  postcss: () => [require('lost'), require('postcss-nested')]
}
