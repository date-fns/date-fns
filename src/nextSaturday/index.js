import getDay from '../getDay'
import addDays from '../addDays'

/**
 * @name nextSaturday
 * @category Weekday Helpers
 * @summary When is the next Saturday?
 *
 * @description
 * When is the next Saturday?
 * {0|1|2|3|4|5|6} the day of week, 0 represents Sunday
 *
 * @param {Date} date - the date to check
 * @returns {Date} the date is Saturday
 * @throws {TypeError} 1 argument required
 *
 * @example
 * When is the next Saturday after Aug 21, 2020?
 * var result = nextSaturday(new Date(2020, 7, 21))
 * => new Date(2020, 7, 22)
 **/

export default function nextSaturday(date) {
  switch (getDay(date)) {
    case 0:
      return addDays(date, 6)
    case 1:
      return addDays(date, 5)
    case 2:
      return addDays(date, 4)
    case 3:
      return addDays(date, 3)
    case 4:
      return addDays(date, 2)
    case 5:
      return addDays(date, 1)
    case 6:
      return addDays(date, 7)
  }
}
