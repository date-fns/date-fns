var getDaysInMonth = require('./get_days_in_month')

/**
 * Sets month index to passed date.
 * @param {date|string} dirtyDate
 * @param {number} monthIndex
 * @returns {date} (new date)
 */
var setMonth = function(dirtyDate, monthIndex) {
  var date = new Date(dirtyDate)
  var year = date.getFullYear()
  var day = date.getDate()
  var daysInMonth = getDaysInMonth(new Date(year, monthIndex))
  date.setMonth(monthIndex, Math.min(day, daysInMonth))
  return date
}

module.exports = setMonth

