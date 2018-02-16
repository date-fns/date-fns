var testsContext = require.context('./src/format', true, /\/test\.js$/)
testsContext.keys().forEach(testsContext)
