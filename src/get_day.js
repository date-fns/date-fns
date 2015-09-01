var parse = require('./parse')

/**
 * Returns day of week of passed date.
 * @param {date|string} dirtyDate
 * @returns {number} (day)
 */
var getDay = function(dirtyDate) {
  var date = parse(dirtyDate)
  var day = date.getDay()
  return day
}

module.exports = getDay

