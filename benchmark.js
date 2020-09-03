var testsContext = require.context('./src/', true, /\/benchmark\.(t|j)s$/)
testsContext.keys().forEach(testsContext)
