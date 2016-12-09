var testsContext = require.context('./src/', true, /\/benchmark\.js$/)
testsContext.keys().forEach(testsContext)
