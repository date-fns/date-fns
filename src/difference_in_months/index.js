import toDate from '../to_date/index.js'
import differenceInCalendarMonths from '../difference_in_calendar_months/index.js'
import compareDesc from '../compare_desc/index.js'

/**
 * @category Month Helpers
 * @summary Get the number of full months between the given dates.
 *
 * @description
 * Get the number of full months between the given dates.
 *
 * @param {Date|String|Number} dateLeft - the earlier date
 * @param {Date|String|Number} dateRight - the later date
 * @param {Options} [options] - the object with options. See [Options]{@link docs/Options}
 * @returns {Number} the number of full months
 *
 * @example
 * // How many full months are between 31 January 2014 and 1 September 2014?
 * var result = differenceInMonths(
 *   new Date(2014, 0, 31),
 *   new Date(2014, 8, 1)
 * )
 * //=> 7
 * */
export default function differenceInMonths (dirtyDateLeft, dirtyDateRight, options) {
  var dateLeft = toDate(dirtyDateLeft, options)
  var dateRight = toDate(dirtyDateRight, options)

  var sign = compareDesc(dateLeft, dateRight)
  var difference = Math.abs(differenceInCalendarMonths(dateLeft, dateRight, options))

  // Math.abs(diff in full months - diff in calendar months) === 1 if last calendar month is not full
  // If so, result must be decreased by 1 in absolute value
  dateRight.setMonth(dateRight.getMonth() - sign * difference)
  var isLastMonthNotFull = compareDesc(dateLeft, dateRight, options) === -sign
  return sign * (difference - isLastMonthNotFull)
}

