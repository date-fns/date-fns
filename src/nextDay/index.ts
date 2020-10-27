import addDays from '../addDays/index'
import getDay from '../getDay/index'
import requiredArgs from '../_lib/requiredArgs/index'

/**
 * @name nextDay
 * @category Weekday Helpers
 * @summary Returns the date of the next specified day of the week
 *
 * @description
 * Returns the date of the next specified day of the week
 *
 * @param {Number} day - Day of the week
 * @param {Date} date - Date to start counting from
 * @returns {Date} the date of the next specified day of the week
 *
 * @example
 * // The Sunday after Jan 1, 2020
 * nextDay(0, new Date('1/1/2020'));
 * //=> 2020-01-05T05:00:00.000Z
 *
 */
export default function nextDay(
  date: Date,
  day?: number
) : Date {
  requiredArgs(1, arguments)

  const dayNum = getDay(date)
  if (!day) {
    day = dayNum
  }
  const offset = day > dayNum ? day : day + 7
  return addDays(date, offset - dayNum)
};
