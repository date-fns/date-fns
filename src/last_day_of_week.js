var parse = require('./parse')

/**
 * Returns last day of a week for given date. Date will be in local timezone.
 * @param {date|string} dirtyDate
 * @param {number} [weekStartsAt=0] first day of week (0 - sunday)
 * @returns {date}
 */
var lastDayOfWeek = function(dirtyDate, weekStartsAt) {
  weekStartsAt = weekStartsAt || 0

  var date = parse(dirtyDate)
  var day = date.getDay()
  var diff = (day < weekStartsAt ? -7 : 0) + 6 - (day - weekStartsAt)

  date.setHours(0, 0, 0, 0)
  date.setDate(date.getDate() + diff)
  return date
}

module.exports = lastDayOfWeek

