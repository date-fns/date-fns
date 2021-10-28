import isSameWeek from '../isSameWeek/index'
import { LocaleOptions, WeekStartOptions } from '../types'

/**
 * @name isThisWeek
 * @category Week Helpers
 * @summary Is the given date in the same week as the current date?
 * @pure false
 *
 * @description
 * Is the given date in the same week as the current date?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * @param date - the date to check
 * @param options - the object with options
 * @returns the date is in this week
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // If today is 25 September 2014, is 21 September 2014 in this week?
 * isThisWeek(new Date(2014, 8, 21))
 * //=> true
 *
 * @example
 * // If today is 25 September 2014 and week starts with Monday
 * // is 21 September 2014 in this week?
 * isThisWeek(new Date(2014, 8, 21), { weekStartsOn: 1 })
 * //=> false
 */

export default function isThisWeek(
  date: Date | number,
  options?: LocaleOptions & WeekStartOptions
): boolean {
  return isSameWeek(date, Date.now(), options)
}
