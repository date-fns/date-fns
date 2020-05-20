import toDate from '../toDate/index.js'

/**
 * @name isLeapYear
 * @category Year Helpers
 * @summary Is the given date in the leap year?
 *
 * @description
 * Is the given date in the leap year?
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param date - The date to check
 * @returns The date is in the leap year
 *
 * @example
 * // Is 1 September 2012 in the leap year?
 * var result = isLeapYear(new Date(2012, 8, 1))
 * //=> true
 */
export default function isLeapYear(dirtyDate: Date | number): boolean {
  var date = toDate(dirtyDate)
  var year = date.getFullYear()
  return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)
}
