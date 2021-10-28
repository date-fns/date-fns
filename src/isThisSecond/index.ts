import isSameSecond from '../isSameSecond/index'

/**
 * @name isThisSecond
 * @category Second Helpers
 * @summary Is the given date in the same second as the current date?
 * @pure false
 *
 * @description
 * Is the given date in the same second as the current date?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * @param date - the date to check
 * @returns the date is in this second
 *
 * @example
 * // If now is 25 September 2014 18:30:15.500,
 * // is 25 September 2014 18:30:15.000 in this second?
 * isThisSecond(new Date(2014, 8, 25, 18, 30, 15))
 * //=> true
 */
export default function isThisSecond(date: Date | number): boolean {
  return isSameSecond(Date.now(), date)
}
