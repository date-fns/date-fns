var parse = require('./parse')
var getTimeInMilliseconds = require('./get_time_in_milliseconds')

/**
 * Adds specified number of days to passed date.
 * @param {data|string} dirtyDate
 * @param {number} amount
 * @returns {date} new date
 */
var addDays = function(dirtyDate, amount) {
  var date = parse(dirtyDate)
  var time = getTimeInMilliseconds(date)
  date.setDate(date.getDate() + amount)
  date.setHours(0, 0, 0, time)
  return date
}

module.exports = addDays

