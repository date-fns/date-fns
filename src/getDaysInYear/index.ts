import isLeapYear from '../isLeapYear/index'
import toDate from '../toDate/index'

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
export default function getDaysInYear<DateType extends Date>(
  date: DateType | number
): number {
  const convertedDate = toDate(date)

  if (String(new Date(convertedDate)) === 'Invalid Date') {
    return NaN
  }

  return isLeapYear(convertedDate) ? 366 : 365
}
