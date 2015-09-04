var parse = require('./parse')
var getTimeInMilliseconds = require('./get_time_in_milliseconds')
var getDaysInMonth = require('./get_days_in_month')

/**
 * Sets month index to passed date.
 * @param {date|string} dirtyDate
 * @param {number} monthIndex
 * @returns {date} (new date)
 */
var setMonth = function(dirtyDate, monthIndex) {
  var date = parse(dirtyDate)
  var time = getTimeInMilliseconds(date)
  var year = date.getFullYear()
  var day = date.getDate()
  var daysInMonth = getDaysInMonth(new Date(year, monthIndex))
  date.setMonth(monthIndex, Math.min(day, daysInMonth))
  date.setHours(0, 0, 0, time)
  return date
}

module.exports = setMonth

