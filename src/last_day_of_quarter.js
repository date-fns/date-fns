/**
 * Returns last day of a quarter for given date. Date will be in local timezone.
 * @param {date|string} dirtyDate
 * @returns {date}
 */
var lastDayOfQuarter = function(dirtyDate) {
  var date = new Date(dirtyDate)
  var currentMonth = date.getMonth()
  var month = currentMonth - currentMonth % 3 + 3
  date.setHours(0, 0, 0, 0)
  date.setMonth(month, 0)
  return date
}

module.exports = lastDayOfQuarter

