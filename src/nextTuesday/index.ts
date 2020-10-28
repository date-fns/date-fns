import getDay from '../getDay'
import addDays from '../addDays'
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
 *
 * @example
 * When is the next Tuesday after Mar, 22, 2020?
 * var result = nextTuesday(new Date(2020, 2, 22))
 * => new Date(2020, 2, 24)
 **/
export default function nextTuesday(date: Date) {
  switch (getDay(date)) {
    case 0:
      return addDays(date, 2)
    case 1:
      return addDays(date, 1)
    case 2:
      return addDays(date, 7)
    case 3:
      return addDays(date, 6)
    case 4:
      return addDays(date, 5)
    case 5:
      return addDays(date, 4)
    case 6:
      return addDays(date, 3)
    default:
      return date
  }
}
