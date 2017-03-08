import isSameWeek from '../isSameWeek/index.js'
import cloneObject from '../_lib/cloneObject/index.js'

/**
 * @name isSameISOWeek
 * @category ISO Week Helpers
 * @summary Are the given dates in the same ISO week?
 *
 * @description
 * Are the given dates in the same ISO week?
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} dateLeft - the first date to check
 * @param {Date|String|Number} dateRight - the second date to check
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Boolean} the dates are in the same ISO week
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Are 1 September 2014 and 7 September 2014 in the same ISO week?
 * var result = isSameISOWeek(
 *   new Date(2014, 8, 1),
 *   new Date(2014, 8, 7)
 * )
 * //=> true
 */
export default function isSameISOWeek (dirtyDateLeft, dirtyDateRight, dirtyOptions) {
  var isSameWeekOptions = cloneObject(dirtyOptions)
  isSameWeekOptions.weekStartsOn = 1
  return isSameWeek(dirtyDateLeft, dirtyDateRight, isSameWeekOptions)
}
