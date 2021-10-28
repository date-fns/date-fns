import isSameQuarter from '../isSameQuarter/index'

/**
 * @name isThisQuarter
 * @category Quarter Helpers
 * @summary Is the given date in the same quarter as the current date?
 * @pure false
 *
 * @description
 * Is the given date in the same quarter as the current date?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * @param date - the date to check
 * @returns the date is in this quarter
 *
 * @example
 * // If today is 25 September 2014, is 2 July 2014 in this quarter?
 * isThisQuarter(new Date(2014, 6, 2))
 * //=> true
 */
export default function isThisQuarter(date: Date | number): boolean {
  return isSameQuarter(Date.now(), date)
}
