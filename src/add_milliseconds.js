var parse = require('./parse')

/**
 * Adds specified number of milliseconds to passed date.
 * @param {data|string} dirtyDate
 * @param {number} amount of milliseconds
 * @returns {date} new date
 */
var addMilliseconds = function(dirtyDate, amount) {
  var date = parse(dirtyDate)
  date.setMilliseconds(date.getMilliseconds() + amount)
  return date
}

module.exports = addMilliseconds

