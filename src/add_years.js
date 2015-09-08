var parse = require('./parse')
var getTimeSinceMidnight = require('./get_time_since_midnight')

/**
 * Adds specified number of years to passed date.
 * @param {data|string} dirtyDate
 * @param {number} amount
 * @returns {date} new date
 */
var addYears = function(dirtyDate, amount) {
  var date = parse(dirtyDate)
  var time = getTimeSinceMidnight(date)
  date.setFullYear(date.getFullYear() + amount)
  date.setHours(0, 0, 0, time)
  return date
}

module.exports = addYears

