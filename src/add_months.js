var parse = require('./parse')
var getDaysInMonth = require('./get_days_in_month')

/**
 * Adds specified number of months to passed date.
 * @param {data|string} dirtyDate
 * @param {number} amount
 * @returns {date} new date
 */
var addMonths = function(dirtyDate, amount) {
  var date = parse(dirtyDate)
  var desiredMonth = date.getMonth() + amount
  var daysInMonth = getDaysInMonth(new Date(date.getFullYear(), desiredMonth, 1))
  // Set the last day of the new month
  // if the original date was the last day of the longer month
  date.setMonth(desiredMonth, Math.min(daysInMonth, date.getDate()))
  return date
}

module.exports = addMonths

