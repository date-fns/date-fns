import toDate from '../toDate/index'

/**
 * @name isLeapYear
 * @category Year Helpers
 * @summary Is the given date in the leap year?
 *
 * @description
 * Is the given date in the leap year?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to check
 *
 * @returns The date is in the leap year
 *
 * @example
 * // Is 1 September 2012 in the leap year?
 * const result = isLeapYear(new Date(2012, 8, 1))
 * //=> true
 */
export default function isLeapYear<DateType extends Date>(
  date: DateType | number
): boolean {
  const _date = toDate(date)
  const year = _date.getFullYear()
  return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)
}
