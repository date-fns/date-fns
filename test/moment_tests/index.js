require('babel-polyfill')
var testsContext = require.context('./moment', true, /\.js$/)
testsContext.keys().forEach(testsContext)
