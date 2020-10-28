import getDay from '../getDay'
import addDays from '../addDays'
/**
 * @name nextThursday
 * @category Weekday Helpers
 * @summary When is the next Thursday?
 *
 * @description
 * When is the next Thursday?
 * {0|1|2|3|4|5|6} the day of week, 0 represents Sunday
 *
 * @param {Date} date - the date to check
 * @returns {Date} the date is Thursday
 * @throws {TypeError} 1 argument required
 *
 * @example
 * When is the next Thursday after Dec 25, 2020?
 * var result = nextThursday(new Date(2020, 11, 25))
 * => new Date(2020, 11, 31)
 **/
export default function nextThursday(date) {
  switch (getDay(date)) {
    case 0:
      return addDays(date, 4)
    case 1:
      return addDays(date, 3)
    case 2:
      return addDays(date, 2)
    case 3:
      return addDays(date, 1)
    case 4:
      return addDays(date, 7)
    case 5:
      return addDays(date, 6)
    case 6:
      return addDays(date, 5)
  }
}
