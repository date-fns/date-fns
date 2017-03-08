var fs = require('fs')

var benchmarkResultFilename = './tmp/benchmark.json'

function benchmarkJSONReporter () {
  var benchmarkResult = {}

  this.onSpecComplete = function (_, result) {
    var fnName = result.benchmark.suite
    var libraryName = result.benchmark.name
    var operationsPerSecond = Math.floor(result.benchmark.hz)

    if (!benchmarkResult[fnName]) {
      benchmarkResult[fnName] = {}
    }

    benchmarkResult[fnName][libraryName] = operationsPerSecond
  }

  this.onRunComplete = function () {
    var benchmarkResultArray = []
    for (var fnName in benchmarkResult) {
      if (benchmarkResult.hasOwnProperty(fnName)) {
        var element = {fn: fnName}

        if (benchmarkResult[fnName]['date-fns']) {
          element.dateFns = benchmarkResult[fnName]['date-fns']
        }

        if (benchmarkResult[fnName]['Moment.js']) {
          element.moment = benchmarkResult[fnName]['Moment.js']
        }

        benchmarkResultArray.push(element)
      }
    }

    fs.writeFile(benchmarkResultFilename, JSON.stringify(benchmarkResultArray), 'utf-8', function (err) {
      if (err) {
        throw err
      }

      console.log('See results at ' + benchmarkResultFilename)
    })
  }
}

module.exports = benchmarkJSONReporter
