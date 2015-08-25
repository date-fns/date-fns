/**
 * Returns last day of a month for given date. Date will be in local timezone.
 * @param {date|string} dirtyDate
 * @returns {date}
 */
var lastDayOfMonth = function(dirtyDate) {
  var date = new Date(dirtyDate)
  var month = date.getMonth()
  date.setHours(0, 0, 0, 0)
  date.setFullYear(date.getFullYear(), month + 1, 0)
  return date
}

module.exports = lastDayOfMonth

