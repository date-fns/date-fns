import toDate from '../toDate/index.js'
import isLeapYear from '../isLeapYear/index.js'

/**
 * @name getDaysInYear
 * @category Year Helpers
 * @summary Get the number of days in a year of the given date.
 *
 * @description
 * Get the number of days in a year of the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param date - The given date
 * @returns The number of days in a year
 *
 * @example
 * // How many days are in 2012?
 * const result = getDaysInYear(new Date(2012, 0, 1))
 * //=> 366
 */
export default function getDaysInYear(dirtyDate: Date | number): number {
  const date = toDate(dirtyDate)

  if (isNaN(date)) {
    return NaN
  }

  return isLeapYear(date) ? 366 : 365
}
