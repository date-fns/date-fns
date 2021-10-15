import isSameYear from '../isSameYear/index'

/**
 * @name isThisYear
 * @category Year Helpers
 * @summary Is the given date in the same year as the current date?
 * @pure false
 *
 * @description
 * Is the given date in the same year as the current date?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * @param date - the date to check
 * @returns the date is in this year
 *
 * @example
 * // If today is 25 September 2014, is 2 July 2014 in this year?
 * isThisYear(new Date(2014, 6, 2))
 * //=> true
 */
export default function isThisYear(date: Date | number): boolean {
  return isSameYear(date, Date.now())
}
