import requiredArgs from '../_lib/requiredArgs/index'
import nextDay from '../nextDay/index'
import toDate from '../toDate/index'
import isValid from '../isValid/index'

/**
 * @name nextMonday
 * @category Weekday Helpers
 * @summary When is the next Monday?
 *
 * @description
 * When is the next Monday?
 *
 * @param {Date | number}  date - the date to check
 * @returns {Date} the date is the next Monday
 * @throws {TypeError} 1 argument required
 *
 * @example
 * When is the next Monday after Mar, 22, 2020?
 * const result = nextMonday(new Date(2020, 2, 22))
 * => new Date(2020, 2, 23)
 **/
export default function nextMonday(date: Date | number): Date {
  requiredArgs(1, arguments)

  if (!isValid(date)) {
    throw new RangeError('Invalid Date')
  }

  return nextDay(toDate(date), 1)
}
