var parse = require('./parse')

/**
 * Returns amount of milliseconds of passed date.
 * @param {date|string} dirtyDate
 * @returns {number} (milliseconds)
 */
var getMilliseconds = function(dirtyDate) {
  var date = parse(dirtyDate)
  var milliseconds = date.getMilliseconds()
  return milliseconds
}

module.exports = getMilliseconds

