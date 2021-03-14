import requiredArgs from '../_lib/requiredArgs/index'
import nextDay from '../nextDay/index'
import toDate from '../toDate/index'

/**
 * @name nextThursday
 * @category Weekday Helpers
 * @summary When is the next Thursday?
 *
 * @description
 * When is the next Thursday?
 *
 * @param {Date | number} date - the date to start counting from
 * @returns {Date} the next Thursday
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // When is the next Thursday after Mar, 22, 2020?
 * const result = nextThursday(new Date(2020, 2, 22))
 * //=> Thur Mar 26 2020 00:00:00
 */
export default function nextThursday(date: Date | number): Date {
  requiredArgs(1, arguments)
  return nextDay(toDate(date), 4)
}
