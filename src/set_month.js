var parse = require('./parse')
var getDaysInMonth = require('./get_days_in_month')

/**
 * @category Month Helpers
 * @summary Set the month.
 *
 * @description
 * Set the month to the given date.
 *
 * @param {Date|String|Number} date to be changed
 * @param {Number} month of the new date
 * @returns {Date} new date with the month setted
 */
var setMonth = function(dirtyDate, month) {
  var date = parse(dirtyDate)
  var year = date.getFullYear()
  var day = date.getDate()
  var daysInMonth = getDaysInMonth(new Date(year, month))
  // Set the last day of the new month
  // if the original date was the last day of the longer month
  date.setMonth(month, Math.min(day, daysInMonth))
  return date
}

module.exports = setMonth

