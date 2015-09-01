var parse = require('./parse')

/**
 * Returns start of a week for given date. Date will be in local timezone.
 * @param {date|string} dirtyDate
 * @param {number} [weekStartsAt=0] first day of week (0 - sunday)
 * @returns {date}
 */
var startOfWeek = function(dirtyDate, weekStartsAt) {
  weekStartsAt = weekStartsAt || 0

  var date = parse(dirtyDate)
  var day = date.getDay()
  var diff = (day < weekStartsAt ? 7 : 0) + day - weekStartsAt

  date.setHours(0, 0, 0, 0)
  date.setDate(date.getDate() - diff)
  return date
}

module.exports = startOfWeek

