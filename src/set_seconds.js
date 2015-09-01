var parse = require('./parse')

/**
 * Sets amount of seconds to passed date.
 * @param {date|string} dirtyDate
 * @param {number} seconds
 * @returns {date} (new date)
 */
var setSeconds = function(dirtyDate, seconds) {
  var date = parse(dirtyDate)
  date.setSeconds(seconds)
  return date
}

module.exports = setSeconds

