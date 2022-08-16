import toDate from '../toDate/index'

/**
 * @name isLeapYear
 * @category Year Helpers
 * @summary Is the given date in the leap year?
 *
 * @description
 * Is the given date in the leap year?
 *
 * @param date - the date to check
 * @returns the date is in the leap year
 *
 * @example
 * // Is 1 September 2012 in the leap year?
 * const result = isLeapYear(new Date(2012, 8, 1))
 * //=> true
 */
export default function isLeapYear<DateType extends Date>(
  dirtyDate: DateType | number
): boolean {
  const date = toDate(dirtyDate)
  const year = date.getFullYear()
  return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)
}
