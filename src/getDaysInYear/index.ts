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
 * const result = getDaysInYear(new Date(2012, 0, 1))
 * //=> 366
 */
export default function getDaysInYear(date: Date | number): number {
  const dateTransformed = new Date(date)

  if (String(new Date(dateTransformed)) === 'Invalid Date') {
    return NaN
  }

  return isLeapYear(dateTransformed) ? 366 : 365
}
