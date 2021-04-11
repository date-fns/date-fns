import requiredArgs from '../_lib/requiredArgs/index'
import nextDay from '../nextDay/index'
import toDate from '../toDate/index'

/**
 * @name nextWednesday
 * @category Weekday Helpers
 * @summary When is the next Wednesday?
 *
 * @description
 * When is the next Wednesday?
 *
 * @param {Date | number} date - the date to start counting from
 * @returns {Date} the next Wednesday
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // When is the next Wednesday after Mar, 22, 2020?
 * const result = nextWednesday(new Date(2020, 2, 22))
 * //=> Wed Mar 25 2020 00:00:00
 */
export default function nextWednesday(date: Date | number): Date {
  requiredArgs(1, arguments)
  return nextDay(toDate(date), 3)
}
