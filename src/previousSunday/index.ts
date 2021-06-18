import requiredArgs from '../_lib/requiredArgs/index'
import previousDay from '../previousDay/index'
import toDate from '../toDate/index'

/**
 * @name previousSunday
 * @category Weekday Helpers
 * @summary When is the previous Sunday?
 *
 * @description
 * When is the previous Sunday?
 *
 * @param {Date | number} date - the date to start counting from
 * @returns {Date} the previous Sunday
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // When is the previous Sunday before Jun, 21, 2021?
 * const result = previousSunday(new Date(2021, 5, 21))
 * //=> Fri June 20 2021 00:00:00
 */
export default function previousSunday(date: Date | number): Date {
  requiredArgs(1, arguments)
  return previousDay(toDate(date), 0)
}
