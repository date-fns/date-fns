var parse = require('../parse/index.js')
var differenceInCalendarDays = require('../difference_in_calendar_days/index.js')
var compareAsc = require('../compare_asc/index.js')

/**
 * @category Day Helpers
 * @summary Get the number of full days between the given dates.
 *
 * @description
 * Get the number of full days between the given dates.
 *
 * @param {Date|String|Number} dateLeft - the later date
 * @param {Date|String|Number} dateRight - the earlier date
 * @param {Options} [options] - the object with options. See [Options]{@link docs/Options}
 * @returns {Number} the number of full days
 *
 * @example
 * // How many full days are between
 * // 2 July 2011 23:00:00 and 2 July 2012 00:00:00?
 * var result = differenceInDays(
 *   new Date(2012, 6, 2, 0, 0),
 *   new Date(2011, 6, 2, 23, 0)
 * )
 * //=> 365
 */
function differenceInDays (dirtyDateLeft, dirtyDateRight, options) {
  var dateLeft = parse(dirtyDateLeft, options)
  var dateRight = parse(dirtyDateRight, options)

  var sign = compareAsc(dateLeft, dateRight, options)
  var difference = Math.abs(differenceInCalendarDays(dateLeft, dateRight, options))
  dateLeft.setDate(dateLeft.getDate() - sign * difference)

  // Math.abs(diff in full days - diff in calendar days) === 1 if last calendar day is not full
  // If so, result must be decreased by 1 in absolute value
  var isLastDayNotFull = compareAsc(dateLeft, dateRight, options) === -sign
  return sign * (difference - isLastDayNotFull)
}

module.exports = differenceInDays
