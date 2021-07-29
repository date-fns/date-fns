import requiredArgs from '../_lib/requiredArgs/index'
import previousDay from '../previousDay/index'
import toDate from '../toDate/index'

/**
 * @name previousSaturday
 * @category Weekday Helpers
 * @summary When is the previous Saturday?
 *
 * @description
 * When is the previous Saturday?
 *
 * @param {Date | number} date - the date to start counting from
 * @returns {Date} the previous Saturday
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // When is the previous Saturday before Jun, 20, 2021?
 * const result = previousSaturday(new Date(2021, 5, 20))
 * //=> Fri June 19 2021 00:00:00
 */
export default function previousSaturday(date: Date | number): Date {
  requiredArgs(1, arguments)
  return previousDay(toDate(date), 6)
}
