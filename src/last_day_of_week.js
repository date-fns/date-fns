var parse = require('./parse')

/**
 * Return the last day of a week for the given date.
 * The result will be in the local timezone.
 * @param {Date|String|Number} dirtyDate - the original date
 * @param {Number} [weekStartsAt=0] the index of the first day of a week (0 - sunday)
 * @returns {Date} last day of a week
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

