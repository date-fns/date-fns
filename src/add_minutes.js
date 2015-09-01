var parse = require('./parse')

/**
 * Adds specified number of minutes to passed date.
 * @param {data|string} dirtyDate
 * @param {number} amount of minutes
 * @returns {date} new date
 */
var addMinutes = function(dirtyDate, amount) {
  var date = parse(dirtyDate)
  date.setMinutes(date.getMinutes() + amount)
  return date
}

module.exports = addMinutes

