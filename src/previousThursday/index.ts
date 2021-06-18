import requiredArgs from '../_lib/requiredArgs/index'
import previousDay from '../previousDay/index'
import toDate from '../toDate/index'

/**
 * @name previousThursday
 * @category Weekday Helpers
 * @summary When is the previous Thursday?
 *
 * @description
 * When is the previous Thursday?
 *
 * @param {Date | number} date - the date to start counting from
 * @returns {Date} the previous Thursday
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // When is the previous Thursday before Jun, 18, 2021?
 * const result = previousThursday(new Date(2021, 5, 18))
 * //=> Thu June 17 2021 00:00:00
 */
export default function previousThursday(date: Date | number): Date {
  requiredArgs(1, arguments)
  return previousDay(toDate(date), 4)
}
