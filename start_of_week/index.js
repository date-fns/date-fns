var parse = require('../parse')

/**
 * @category Week Helpers
 * @summary Return the start of a week for the given date.
 *
 * @description
 * Return the start of a week for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @param {Number} [weekStartsAt=0] - the index of the first day of a week (0 - sunday)
 * @returns {Date} start of a week
 *
 * @example
 * // The start of a week for 2 September 2014 11:55:00:
 * var result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sun Aug 31 2014 00:00:00
 *
 * @example
 * // If week starts at Monday, the start of a week for 2 September 2014 11:55:00:
 * var result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0), 1)
 * //=> Mon Sep 01 2014 00:00:00
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

