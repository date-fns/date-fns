var path = require('path')

var config = {
  cache: true,
  devtool: process.env.NODE_ENV === 'production' ? 'source-map' : 'inline-source-map',
  entry: getEntryConfig(),
  output: getOutputConfig(),
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
      {test: /\.json$/, loader: 'json'}
    ]
  }
}

function getEntryConfig () {
  if (process.env.BUILD_TESTS) {
    return {
      'tests': './test.js'
    }
  } else if (process.env.NODE_ENV === 'test') {
    return {}
  } else {
    return {
      'date_fns': './tmp/umd/index.js'
    }
  }
}

function getOutputConfig () {
  if (process.env.BUILD_TESTS) {
    return {
      path: path.join(process.cwd(), 'tmp'),
      filename: '[name].js'
    }
  } else if (process.env.NODE_ENV === 'test') {
    return {
      path: '/'
    }
  } else {
    return {
      path: path.join(process.cwd(), 'dist'),
      filename: '[name].js',
      library: 'dateFns',
      libraryTarget: 'umd'
    }
  }
}

module.exports = config
