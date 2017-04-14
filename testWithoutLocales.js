var testsContext = require.context('./src/', true, /\/test\.js$/)
testsContext
  .keys()
  .filter(function (test) {
    return !test.match(/\.\/locale\//)
  })
  .forEach(testsContext)
