/**
 * Returns end of a quarter for given date. Date will be in local timezone.
 * @param {date|string} dirtyDate
 * @returns {date}
 */
var endOfQuarter = function(dirtyDate) {
  var date = new Date(dirtyDate)
  var currentMonth = date.getMonth()
  var month = currentMonth - currentMonth % 3 + 3
  date.setHours(23, 59, 59, 999)
  date.setMonth(month, 0)
  return date
}

module.exports = endOfQuarter

