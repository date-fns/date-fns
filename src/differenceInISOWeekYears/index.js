import toDate from '../toDate/index.js'
import differenceInCalendarISOWeekYears from '../differenceInCalendarISOWeekYears/index.js'
import compareAsc from '../compareAsc/index.js'
import subISOWeekYears from '../subISOWeekYears/index.js'

/**
 * @name differenceInISOWeekYears
 * @category ISO Week-Numbering Year Helpers
 * @summary Get the number of full ISO week-numbering years between the given dates.
 *
 * @description
 * Get the number of full ISO week-numbering years between the given dates.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} dateLeft - the later date
 * @param {Date|String|Number} dateRight - the earlier date
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Number} the number of full ISO week-numbering years
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // How many full ISO week-numbering years are between 1 January 2010 and 1 January 2012?
 * var result = differenceInISOWeekYears(
 *   new Date(2012, 0, 1),
 *   new Date(2010, 0, 1)
 * )
 * //=> 1
 */
export default function differenceInISOWeekYears (dirtyDateLeft, dirtyDateRight, dirtyOptions) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present')
  }

  var dateLeft = toDate(dirtyDateLeft, dirtyOptions)
  var dateRight = toDate(dirtyDateRight, dirtyOptions)

  var sign = compareAsc(dateLeft, dateRight, dirtyOptions)
  var difference = Math.abs(differenceInCalendarISOWeekYears(dateLeft, dateRight, dirtyOptions))
  dateLeft = subISOWeekYears(dateLeft, sign * difference, dirtyOptions)

  // Math.abs(diff in full ISO years - diff in calendar ISO years) === 1
  // if last calendar ISO year is not full
  // If so, result must be decreased by 1 in absolute value
  var isLastISOWeekYearNotFull = compareAsc(dateLeft, dateRight, dirtyOptions) === -sign
  var result = sign * (difference - isLastISOWeekYearNotFull)
  // Prevent negative zero
  return result === 0 ? 0 : result
}
