var testsContext = require.context('./src/', true, /\/test\.ts$/)
testsContext.keys().forEach(testsContext)
