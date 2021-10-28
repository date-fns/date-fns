import nextDay from '../nextDay/index'

/**
 * @name nextFriday
 * @category Weekday Helpers
 * @summary When is the next Friday?
 *
 * @description
 * When is the next Friday?
 *
 * @param date - the date to start counting from
 * @returns the next Friday
 *
 * @example
 * // When is the next Friday after Mar, 22, 2020?
 * nextFriday(new Date(2020, 2, 22))
 * //=> Fri Mar 27 2020 00:00:00
 */
export default function nextFriday(date: Date | number): Date {
  return nextDay(date, 5)
}
