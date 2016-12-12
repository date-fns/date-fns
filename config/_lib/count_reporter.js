var fs = require('fs')

var countFilename = './tmp/tests_count.txt'

function countReporter () {
  this.onRunComplete = function (_, result) {
    var runCount = result.success

    fs.readFile(countFilename, {encoding: 'utf-8', flag: 'a+'}, function (err, data) {
      if (err) {
        throw err
      }

      var totalCount = (parseInt(data, 10) || 0) + runCount

      fs.writeFile(countFilename, totalCount, 'utf-8', function (err) {
        if (err) {
          throw err
        }
      })
    })
  }
}

module.exports = countReporter
