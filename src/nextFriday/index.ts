import requiredArgs from '../_lib/requiredArgs/index'
import nextDay from '../nextDay/index'
import toDate from '../toDate/index'

/**
 * @name nextFriday
 * @category Weekday Helpers
 * @summary When is the next Friday?
 *
 * @description
 * When is the next Friday?
 *
 * @param {Date | number} date the date to check
 * @returns {Date} the date is the next Friday
 * @throws {TypeError} the date should be a valid date
 * @throws {TypeError} 1 argument required
 *
 * @example
 * When is the next Friday after Mar, 22, 2020?
 * const result = nextFriday(new Date(2020, 2, 22))
 * => Fri Mar 27 2020 00:00:00
 **/

export default function nextFriday(date: Date | number): Date {
  requiredArgs(1, arguments)
  return nextDay(toDate(date), 5)
}
