var parse = require('./parse')

/**
 * Adds specified number of days to passed date.
 * @param {data|string} dirtyDate
 * @param {number} amount
 * @returns {date} new date
 */
var addDays = function(dirtyDate, amount) {
  var date = parse(dirtyDate)
  date.setDate(date.getDate() + amount)
  return date
}

module.exports = addDays

