import isSameDay from '../isSameDay/index'

/**
 * @name isToday
 * @category Day Helpers
 * @summary Is the given date today?
 * @pure false
 *
 * @description
 * Is the given date today?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * @param date - the date to check
 * @returns the date is today
 *
 * @example
 * // If today is 6 October 2014, is 6 October 14:00:00 today?
 * isToday(new Date(2014, 9, 6, 14, 0))
 * //=> true
 */
export default function isToday(date: Date | number): boolean {
  return isSameDay(date, Date.now())
}
