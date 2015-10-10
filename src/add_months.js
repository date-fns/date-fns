var parse = require('./parse')
var getDaysInMonth = require('./get_days_in_month')

/**
 * @category Month Helpers
 * @summary Add the specified number of months to the given date.
 *
 * Add the specified number of months to the given date.
 *
 * @param {Date|String|Number} date to be changed
 * @param {Number} amount of months to be added
 * @returns {Date} new date with the months added
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

