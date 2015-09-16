var testsContext = require.context('./src/__tests__', true, /_test.js$/)
testsContext.keys().forEach(testsContext)

