import toDate from '../toDate/index.js'
import differenceInCalendarMonths from '../differenceInCalendarMonths/index.js'
import compareAsc from '../compareAsc/index.js'

/**
 * @name differenceInMonths
 * @category Month Helpers
 * @summary Get the number of full months between the given dates.
 *
 * @description
 * Get the number of full months between the given dates.
 *
 * @param {Date|String|Number} dateLeft - the later date
 * @param {Date|String|Number} dateRight - the earlier date
 * @param {Options} [options] - the object with options. See [Options]{@link docs/Options}
 * @returns {Number} the number of full months
 *
 * @example
 * // How many full months are between 31 January 2014 and 1 September 2014?
 * var result = differenceInMonths(
 *   new Date(2014, 8, 1),
 *   new Date(2014, 0, 31)
 * )
 * //=> 7
 */
export default function differenceInMonths (dirtyDateLeft, dirtyDateRight, dirtyOptions) {
  var dateLeft = toDate(dirtyDateLeft, dirtyOptions)
  var dateRight = toDate(dirtyDateRight, dirtyOptions)

  var sign = compareAsc(dateLeft, dateRight, dirtyOptions)
  var difference = Math.abs(differenceInCalendarMonths(dateLeft, dateRight, dirtyOptions))
  dateLeft.setMonth(dateLeft.getMonth() - sign * difference)

  // Math.abs(diff in full months - diff in calendar months) === 1 if last calendar month is not full
  // If so, result must be decreased by 1 in absolute value
  var isLastMonthNotFull = compareAsc(dateLeft, dateRight, dirtyOptions) === -sign
  return sign * (difference - isLastMonthNotFull)
}
