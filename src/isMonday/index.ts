import toDate from '../toDate/index'
import requiredArgs from '../_lib/requiredArgs/index'

/**
 * @name isMonday
 * @category Weekday Helpers
 * @summary Is the given date Monday?
 *
 * @description
 * Is the given date Monday?
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is Monday
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Is 22 September 2014 Monday?
 * const result = isMonday(new Date(2014, 8, 22))
 * //=> true
 */
export default function isMonday<DateType extends Date>(
  date: DateType | number
): boolean {
  requiredArgs(1, arguments)

  return toDate(date).getDay() === 1
}
