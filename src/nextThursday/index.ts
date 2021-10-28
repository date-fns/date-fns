import nextDay from '../nextDay/index'

/**
 * @name nextThursday
 * @category Weekday Helpers
 * @summary When is the next Thursday?
 *
 * @description
 * When is the next Thursday?
 *
 * @param date - the date to start counting from
 * @returns the next Thursday
 *
 * @example
 * // When is the next Thursday after Mar, 22, 2020?
 * nextThursday(new Date(2020, 2, 22))
 * //=> Thur Mar 26 2020 00:00:00
 */
export default function nextThursday(date: Date | number): Date {
  return nextDay(date, 4)
}
