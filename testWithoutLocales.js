var testsContext = require.context('./src/', true, /\/test\.(t|j)s$/)
testsContext
  .keys()
  .filter(function(test) {
    return !test.match(/\.\/locale\//)
  })
  .forEach(testsContext)
