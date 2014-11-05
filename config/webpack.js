var path = require('path');

var config = {
  cache: true,
  entry: {
    'date_fns': './src/date_fns.js'
  },
  output: {
    path: path.join(process.cwd(), 'dist'),
    filename: '[name].js'
  }
};

module.exports = config;

