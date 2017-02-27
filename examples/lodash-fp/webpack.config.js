module.exports = {
  entry: './example.js',
  output: {
    path: './dist',
    filename: 'example.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  }
}
