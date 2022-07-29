import isSameWeek from '../isSameWeek/index'
import type { LocaleOptions, WeekStartOptions } from '../types'

/**
 * The {@link isThisWeek} function options.
 */
export interface IsThisWeekOptions extends WeekStartOptions, LocaleOptions {}

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
 *
 * @example
 * // If today is 25 September 2014, is 21 September 2014 in this week?
 * const result = isThisWeek(new Date(2014, 8, 21))
 * //=> true
 *
 * @example
 * // If today is 25 September 2014 and week starts with Monday
 * // is 21 September 2014 in this week?
 * const result = isThisWeek(new Date(2014, 8, 21), { weekStartsOn: 1 })
 * //=> false
 */

export default function is<DateType extends Date>(
  dirtyDate: DateType | number,
  options?: IsThisWeekOptions
): boolean {
  return isSameWeek(dirtyDate, Date.now(), options)
}
