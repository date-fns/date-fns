import isLeapYear from '../isLeapYear/index'

/**
 * @name getDaysInYear
 * @category Year Helpers
 * @summary Get the number of days in a year of the given date.
 *
 * @description
 * Get the number of days in a year of the given date.
 *
 * @param date - the given date
 * @returns the number of days in a year
 *
 * @example
 * // How many days are in 2012?
 * getDaysInYear(new Date(2012, 0, 1))
 * //=> 366
 */
export default function getDaysInYear(date: Date | number): number {
  if (isNaN(+date)) {
    return NaN
  }
  return isLeapYear(date) ? 366 : 365
}
