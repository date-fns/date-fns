import toDate from '../toDate/index'
import requiredArgs from '../_lib/requiredArgs/index'

/**
 * @name isFriday
 * @category Weekday Helpers
 * @summary Is the given date Friday?
 *
 * @description
 * Is the given date Friday?
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is Friday
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Is 26 September 2014 Friday?
 * const result = isFriday(new Date(2014, 8, 26))
 * //=> true
 */
export default function isFriday<DateType extends Date>(
  dirtyDate: DateType | number
): boolean {
  requiredArgs(1, arguments)

  return toDate(dirtyDate).getDay() === 5
}
