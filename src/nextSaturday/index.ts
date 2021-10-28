import nextDay from '../nextDay/index'

/**
 * @name nextSaturday
 * @category Weekday Helpers
 * @summary When is the next Saturday?
 *
 * @description
 * When is the next Saturday?
 *
 * @param date - the date to start counting from
 * @returns the next Saturday
 *
 * @example
 * // When is the next Saturday after Mar, 22, 2020?
 * nextSaturday(new Date(2020, 2, 22))
 * //=> Sat Mar 28 2020 00:00:00
 */
export default function nextSaturday(date: Date | number): Date {
  return nextDay(date, 6)
}
