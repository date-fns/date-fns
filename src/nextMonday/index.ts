import requiredArgs from '../_lib/requiredArgs/index'
import nextDay from '../nextDay/index'
import toDate from '../toDate/index'

/**
 * @name nextMonday
 * @category Weekday Helpers
 * @summary When is the next Monday?
 *
 * @description
 * When is the next Monday?
 *
 * @param {Date | number} date - the date to check
 * @returns {Date} - the date is the next Monday
 * @throws {TypeError} - the date should be a valid date
 * @throws {TypeError} - 1 argument required
 *
 * @example
 * When is the next Monday after Mar, 22, 2020?
 * const result = nextMonday(new Date(2020, 2, 22))
 * => Mon Mar 23 2020 00:00:00
 **/
export default function nextMonday(date: Date | number): Date {
  requiredArgs(1, arguments)
  return nextDay(toDate(date), 1)
}
