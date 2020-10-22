import add from '../add/index'
import getDay from '../getDay/index'

/**
 * @name next
 * @category Weekday Helpers
 * @summary Returns the date of the next specified day of the week
 *
 * @description
 * Returns the date of the next specified day of the week
 *
 * @param {number} day - Day of the week
 * @param {date} date - Date to start counting from
 * @returns {date} the date of the next specified day of the week
 *
 * @example
 * // The Sunday after Jan 1, 2020
 * next(0, new Date('1/1/2020'));
 * //=> 2020-01-05T05:00:00.000Z
 *
 */
export default function next(
  day: number,
  date: date
) : Date {
  const today = getDay(date)
  const offset = day > today ? day : day + 7

  return add(date, { days: offset - today })
};
