var testsContext = require.context('./src/', true, /\/test\.(t|j)s$/)
testsContext.keys().forEach(testsContext)
