import toDate from '../toDate/index.js'
import differenceInCalendarDays from '../differenceInCalendarDays/index.js'
import compareDesc from '../compareDesc/index.js'

/**
 * @name differenceInDays
 * @category Day Helpers
 * @summary Get the number of full days between the given dates.
 *
 * @description
 * Get the number of full days between the given dates.
 *
 * @param {Date|String|Number} dateLeft - the earlier date
 * @param {Date|String|Number} dateRight - the later date
 * @param {Options} [options] - the object with options. See [Options]{@link docs/Options}
 * @returns {Number} the number of full days
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // How many full days are between
 * // 2 July 2011 23:00:00 and 2 July 2012 00:00:00?
 * var result = differenceInDays(
 *   new Date(2011, 6, 2, 23, 0),
 *   new Date(2012, 6, 2, 0, 0)
 * )
 * //=> 365
 */
export default function differenceInDays (dirtyDateLeft, dirtyDateRight, dirtyOptions) {
  var dateLeft = toDate(dirtyDateLeft, dirtyOptions)
  var dateRight = toDate(dirtyDateRight, dirtyOptions)

  var sign = compareDesc(dateLeft, dateRight, dirtyOptions)
  var difference = Math.abs(differenceInCalendarDays(dateLeft, dateRight, dirtyOptions))

  // Math.abs(diff in full days - diff in calendar days) === 1 if last calendar day is not full
  // If so, result must be decreased by 1 in absolute value
  dateRight.setDate(dateRight.getDate() - sign * difference)
  var isLastDayNotFull = compareDesc(dateLeft, dateRight, dirtyOptions) === -sign
  return sign * (difference - isLastDayNotFull)
}
