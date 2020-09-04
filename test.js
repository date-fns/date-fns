var testsContext = require.context('./src/', true, /\/test\.(j|t)s$/)
testsContext.keys().forEach(testsContext)
