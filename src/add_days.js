var parse = require('./parse')
var getTimeSinceMidnight = require('./get_time_since_midnight')

/**
 * Adds specified number of days to passed date.
 * @param {data|string} dirtyDate
 * @param {number} amount
 * @returns {date} new date
 */
var addDays = function(dirtyDate, amount) {
  var date = parse(dirtyDate)
  var time = getTimeSinceMidnight(date)
  date.setDate(date.getDate() + amount)
  date.setHours(0, 0, 0, time)
  return date
}

module.exports = addDays

