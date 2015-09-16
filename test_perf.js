var testsContext = require.context('./src/__tests_perf__', true, /_test_perf.js$/)
testsContext.keys().forEach(testsContext)

