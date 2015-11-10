var parse = require('../parse')

/**
 * @category Week Helpers
 * @summary Return the end of a week for the given date.
 *
 * @description
 * Return the end of a week for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @param {Object} [options] - the object with options
 * @param {Number} [options.weekStartsAt=0] - the index of the first day of a week (0 - sunday)
 * @returns {Date} end of a week
 *
 * @example
 * // The end of a week for 2 September 2014 11:55:00:
 * var result = endOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sat Sep 06 2014 23:59:59.999
 *
 * @example
 * // If week starts at Monday, the end of a week for 2 September 2014 11:55:00:
 * var result = endOfWeek(new Date(2014, 8, 2, 11, 55, 0), {weekStartsAt: 1})
 * //=> Sun Sep 07 2014 23:59:59.999
 */
var endOfWeek = function(dirtyDate, options) {
  var weekStartsAt = options ? (options.weekStartsAt || 0) : 0

  var date = parse(dirtyDate)
  var day = date.getDay()
  var diff = (day < weekStartsAt ? -7 : 0) + 6 - (day - weekStartsAt)

  date.setDate(date.getDate() + diff)
  date.setHours(23, 59, 59, 999)
  return date
}

module.exports = endOfWeek

