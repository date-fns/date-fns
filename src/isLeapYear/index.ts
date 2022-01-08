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
export default function isLeapYear(date: Date | number): boolean {
  const dateTransformed = new Date(date)
  const year = dateTransformed.getFullYear()
  return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)
}
