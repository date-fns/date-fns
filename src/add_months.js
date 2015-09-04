var parse = require('./parse')
var getTimeInMilliseconds = require('./get_time_in_milliseconds')
var getDaysInMonth = require('./get_days_in_month')

/**
 * Adds specified number of months to passed date.
 * @param {data|string} dirtyDate
 * @param {number} amount
 * @returns {date} new date
 */
var addMonths = function(dirtyDate, amount) {
  var date = parse(dirtyDate)
  var time = getTimeInMilliseconds(date)
  var desiredMonth = date.getMonth() + amount
  var daysInMonth = getDaysInMonth(new Date(date.getFullYear(), desiredMonth, 1))

  date.setMonth(desiredMonth, Math.min(daysInMonth, date.getDate()))
  date.setHours(0, 0, 0, time)
  return date
}

module.exports = addMonths

