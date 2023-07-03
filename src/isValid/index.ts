import isDate from '../isDate/index'
import toDate from '../toDate/index'

/**
 * @name isValid
 * @category Common Helpers
 * @summary Is the given date valid?
 *
 * @description
 * Returns false if argument is Invalid Date and true otherwise.
 * Argument is converted to Date using `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * Invalid Date is a Date, whose time value is NaN.
 *
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * @param date - the date to check
 * @returns the date is a valid date or a number convertable into a date
 *
 * @example
 * // For the valid date:
 * const result = isValid(new Date(2014, 1, 31))
 * //=> true
 *
 * @example
 * // For the value, convertable into a date:
 * const result = isValid(1393804800000)
 * //=> true
 *
 * @example
 * // For the invalid date:
 * const result = isValid(new Date(''))
 * //=> false
 */
export default function isValid(
  dirtyDate: unknown
): dirtyDate is number | Date {
  if (!isDate(dirtyDate) && typeof dirtyDate !== 'number') {
    return false
  }
  const date = toDate(dirtyDate)
  return !isNaN(Number(date))
}
