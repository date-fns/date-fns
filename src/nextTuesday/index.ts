import requiredArgs from '../_lib/requiredArgs/index'
import getDay from '../getDay'
import addDays from '../addDays'
import toDate from '../toDate/index'
/**
 * @name nextTuesday
 * @category Weekday Helpers
 * @summary When is the next Tuesday?
 *
 * @description
 * When is the next Tuesday?
 * {0|1|2|3|4|5|6} the day of week, 0 represents Sunday
 *
 * @param {Date} date - the date to check
 * @returns {Date} the date is Tuesday
 * @throws {TypeError} 1 argument required
 * @throws {TypeError} the date should be a valid date
 *
 * @example
 * When is the next Tuesday after Mar, 22, 2020?
 * const result = nextTuesday(new Date(2020, 2, 22))
 * => new Date(2020, 2, 24)
 **/

export default function nextTuesday(date: Date | number): Date {
  requiredArgs(1, arguments)
  const convertedDate = toDate(date)

  switch (getDay(convertedDate)) {
    case 0:
      return addDays(convertedDate, 2)
    case 1:
      return addDays(convertedDate, 1)
    case 2:
      return addDays(convertedDate, 7)
    case 3:
      return addDays(convertedDate, 6)
    case 4:
      return addDays(convertedDate, 5)
    case 5:
      return addDays(convertedDate, 4)
    case 6:
      return addDays(convertedDate, 3)
    default:
      return convertedDate
  }
}
