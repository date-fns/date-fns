import addDays from '../addDays/index'
import isSameDay from '../isSameDay/index'

/**
 * @name isTomorrow
 * @category Day Helpers
 * @summary Is the given date tomorrow?
 * @pure false
 *
 * @description
 * Is the given date tomorrow?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * @param date - the date to check
 * @returns the date is tomorrow
 *
 * @example
 * // If today is 6 October 2014, is 7 October 14:00:00 tomorrow?
 * const result = isTomorrow(new Date(2014, 9, 7, 14, 0))
 * //=> true
 */
export default function isTomorrow<DateType extends Date>(
  dirtyDate: DateType | number
): boolean {
  return isSameDay(dirtyDate, addDays(Date.now(), 1))
}
