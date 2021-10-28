import previousDay from '../previousDay/index'

/**
 * @name previousFriday
 * @category Weekday Helpers
 * @summary When is the previous Friday?
 *
 * @description
 * When is the previous Friday?
 *
 * @param date - the date to start counting from
 * @returns the previous Friday
 *
 * @example
 * // When is the previous Friday before Jun, 19, 2021?
 * previousFriday(new Date(2021, 5, 19))
 * //=> Fri June 18 2021 00:00:00
 */
export default function previousFriday(date: Date | number): Date {
  return previousDay(date, 5)
}
