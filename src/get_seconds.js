var parse = require('./parse')

/**
 * Returns amount of seconds of passed date.
 * @param {date|string} dirtyDate
 * @returns {number} (seconds)
 */
var getSeconds = function(dirtyDate) {
  var date = parse(dirtyDate)
  var seconds = date.getSeconds()
  return seconds
}

module.exports = getSeconds

