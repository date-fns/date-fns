var parse = require('./parse')

var MILLISECONDS_IN_HOUR = 3600000
var MILLISECONDS_IN_MINUTE = 60000

/**
 * Returns time since midnight in milliseconds.
 * @param {date|string} dirtyDate
 * @returns {number}
 */
var getTimeInMilliseconds = function(dirtyDate) {
  var date = parse(dirtyDate)

  var hours = date.getHours()
  var minutes = date.getMinutes()
  var seconds = date.getSeconds()
  var milliseconds = date.getMilliseconds()
  
  var time = hours * MILLISECONDS_IN_HOUR
    + minutes * MILLISECONDS_IN_MINUTE
    + seconds * 1000 + milliseconds

  return time
}

module.exports = getTimeInMilliseconds

