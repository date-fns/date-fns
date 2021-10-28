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
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * @param date - the date to check
 * @returns the date is in this month
 *
 * @example
 * // If today is 25 September 2014, is 15 September 2014 in this month?
 * isThisMonth(new Date(2014, 8, 15))
 * //=> true
 */

export default function isThisMonth(date: Date | number): boolean {
  return isSameMonth(Date.now(), date)
}
