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
  /**
   * add additional 5 hours to get next day,
   * because of possible troubles with daylight savings dates
   */
  date = new Date(date.setTime(date.getTime() + 5 * 60 * 60 * 1000))
  date = new Date(date.setHours(0, 0, 0, 0))
  return date
}

module.exports = addDays

