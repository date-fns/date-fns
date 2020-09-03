var testsContext = require.context('./src/', true, /\/benchmark\.(j|t)s$/)
testsContext.keys().forEach(testsContext)
