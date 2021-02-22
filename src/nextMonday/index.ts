import requiredArgs from '../_lib/requiredArgs/index'
import getDay from '../getDay'
import addDays from '../addDays'
import toDate from '../toDate/index'

const map = [1, 7, 6, 5, 4, 3, 2]

/**
 * @name nextMonday
 * @category Weekday Helpers
 * @summary When is the next Monday?
 *
 * @description
 * When is the next Monday?
 * {0|1|2|3|4|5|6} the day of week, 0 represents Sunday
 *
 * @param {Date} date - the date to check
 * @returns {Date} the date is Monday
 * @throws {TypeError} 1 argument required
 *
 * @example
 * When is the next Monday after Mar, 22, 2020?
 * var result = nextMonday(new Date(2020, 2, 22))
 * => new Date(2020, 2, 23)
 **/
export default function nextMonday(date: Date): Date {
  requiredArgs(1, arguments)
  return addDays(date, map[getDay(date)])
}
