import getDay from '../getDay'
import addDays from '../addDays'

/**
 * @name nextWednesday
 * @category Weekday Helpers
 * @summary When is the next Wednesday?
 *
 * @description
 * When is the next Saturday?
 * {0|1|2|3|4|5|6} the day of week, 0 represents Sunday
 *
 * @param {Date} date - the date to check
 * @returns {Date} the date is Wednesday
 * @throws {TypeError} 1 argument required
 *
 * @example
 * When is the next Wednesday after Aug 21, 2020?
 * var result = nextWednesday(new Date(2020, 7, 21))
 * => new Date(2020, 7, 26)
 **/

export default function nextWednesday(date) {
  console.log('date', date)
  switch (getDay(date)) {
    case 0:
      return addDays(date, 3)
    case 1:
      return addDays(date, 2)
    case 2:
      return addDays(date, 1)
    case 3:
      return addDays(date, 7)
    case 4:
      return addDays(date, 6)
    case 5:
      return addDays(date, 5)
    case 6:
      return addDays(date, 4)
  }
}
