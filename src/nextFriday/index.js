import getDay from '../getDay'
import addDays from '../addDays'
/**
 * @name nextFriday
 * @category Weekday Helpers
 * @summary When is the next Friday?
 *
 * @description
 * When is the next Friday?
 * {0|1|2|3|4|5|6} the day of week, 0 represents Sunday
 *
 * @param {Date} date - the date to check
 * @returns {Date} the date is Friday
 * @throws {TypeError} 1 argument required
 *
 * @example
 * When is the next Friday after Dec 25, 2020?
 * var result = nextFriday(new Date(2020, 11, 25))
 * => new Date(2021, 0, 1)
 **/
export default function nextFriday(date) {
  switch (getDay(date)) {
    case 0:
      return addDays(date, 5)
    case 1:
      return addDays(date, 4)
    case 2:
      return addDays(date, 3)
    case 3:
      return addDays(date, 2)
    case 4:
      return addDays(date, 1)
    case 5:
      return addDays(date, 7)
    case 6:
      return addDays(date, 6)
  }
}
