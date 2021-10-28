import nextDay from '../nextDay/index'

/**
 * @name nextWednesday
 * @category Weekday Helpers
 * @summary When is the next Wednesday?
 *
 * @description
 * When is the next Wednesday?
 *
 * @param date - the date to start counting from
 * @returns the next Wednesday
 *
 * @example
 * // When is the next Wednesday after Mar, 22, 2020?
 * nextWednesday(new Date(2020, 2, 22))
 * //=> Wed Mar 25 2020 00:00:00
 */
export default function nextWednesday(date: Date | number): Date {
  return nextDay(date, 3)
}
