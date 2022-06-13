import toDate from '../toDate/index'
import requiredArgs from '../_lib/requiredArgs/index'

/**
 * @name isWednesday
 * @category Weekday Helpers
 * @summary Is the given date Wednesday?
 *
 * @description
 * Is the given date Wednesday?
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is Wednesday
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Is 24 September 2014 Wednesday?
 * const result = isWednesday(new Date(2014, 8, 24))
 * //=> true
 */
export default function isWednesday<DateType extends Date>(
  dirtyDate: DateType | number
): boolean {
  requiredArgs(1, arguments)

  return toDate(dirtyDate).getDay() === 3
}
