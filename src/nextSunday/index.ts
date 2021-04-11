import requiredArgs from '../_lib/requiredArgs/index'
import nextDay from '../nextDay/index'
import toDate from '../toDate/index'

/**
 * @name nextSunday
 * @category Weekday Helpers
 * @summary When is the next Sunday?
 *
 * @description
 * When is the next Sunday?
 *
 * @param {Date | number} date - the date to start counting from
 * @returns {Date} the next Sunday
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // When is the next Sunday after Mar, 22, 2020?
 * const result = nextSunday(new Date(2020, 2, 22))
 * //=> Sun Mar 29 2020 00:00:00
 */
export default function nextSunday(date: Date | number): Date {
  requiredArgs(1, arguments)
  return nextDay(toDate(date), 0)
}
