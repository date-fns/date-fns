import previousDay from '../previousDay/index'

/**
 * @name previousSunday
 * @category Weekday Helpers
 * @summary When is the previous Sunday?
 *
 * @description
 * When is the previous Sunday?
 *
 * @param date - the date to start counting from
 * @returns the previous Sunday
 *
 * @example
 * // When is the previous Sunday before Jun, 21, 2021?
 * previousSunday(new Date(2021, 5, 21))
 * //=> Sun June 20 2021 00:00:00
 */
export default function previousSunday(date: Date | number): Date {
  return previousDay(date, 0)
}
