import previousDay from '../previousDay/index'
import type { ReadonlyDate } from '../types'

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
 * const result = previousSunday(new Date(2021, 5, 21))
 * //=> Sun June 20 2021 00:00:00
 */
export default function previousSunday<DateType extends Date>(
  date: ReadonlyDate<DateType> | number
): DateType {
  return previousDay(date, 0)
}
