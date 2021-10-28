import previousDay from '../previousDay/index'

/**
 * @name previousMonday
 * @category Weekday Helpers
 * @summary When is the previous Monday?
 *
 * @description
 * When is the previous Monday?
 *
 * @param date - the date to start counting from
 * @returns the previous Monday
 *
 * @example
 * // When is the previous Monday before Jun, 18, 2021?
 * previousMonday(new Date(2021, 5, 18))
 * //=> Mon June 14 2021 00:00:00
 */
export default function previousMonday(date: Date | number): Date {
  return previousDay(date, 1)
}
