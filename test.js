var testsContext = require.context('./src/parse', true, /\/test\.js$/)
testsContext.keys().forEach(testsContext)
