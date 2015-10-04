var parse = require('./parse')

/**
 * Return the start of a week for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @param {Number} [weekStartsAt=0] the index of the first day of a week (0 - sunday)
 * @returns {Date} start of a week
 */
var startOfWeek = function(dirtyDate, weekStartsAt) {
  weekStartsAt = weekStartsAt || 0

  var date = parse(dirtyDate)
  var day = date.getDay()
  var diff = (day < weekStartsAt ? 7 : 0) + day - weekStartsAt

  date.setDate(date.getDate() - diff)
  date.setHours(0, 0, 0, 0)
  return date
}

module.exports = startOfWeek

