import startOfYear from '../startOfYear/index'
import differenceInCalendarDays from '../differenceInCalendarDays/index'

/**
 * @name getDayOfYear
 * @category Day Helpers
 * @summary Get the day of the year of the given date.
 *
 * @description
 * Get the day of the year of the given date.
 *
 * @param date - the given date
 * @returns the day of year
 *
 * @example
 * // Which day of the year is 2 July 2014?
 * getDayOfYear(new Date(2014, 6, 2))
 * //=> 183
 */
export default function getDayOfYear(date: Date | number): number {
  const diff = differenceInCalendarDays(date, startOfYear(date))
  const dayOfYear = diff + 1
  return dayOfYear
}
