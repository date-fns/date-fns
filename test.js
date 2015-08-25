var testsContext = require.context('./src', true, /_test.js$/)
testsContext.keys().forEach(testsContext)

