import isSameMonth from '../isSameMonth/index'

/**
 * @name isThisMonth
 * @category Month Helpers
 * @summary Is the given date in the same month as the current date?
 * @pure false
 *
 * @description
 * Is the given date in the same month as the current date?
 *
 * @param date - the date to check
 * @returns the date is in this month
 *
 * @example
 * // If today is 25 September 2014, is 15 September 2014 in this month?
 * const result = isThisMonth(new Date(2014, 8, 15))
 * //=> true
 */

export default function isThisMonth<DateType extends Date>(
  dirtyDate: DateType | number
): boolean {
  return isSameMonth(Date.now(), dirtyDate)
}
