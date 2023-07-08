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
 * @param date - the date to check
 * @returns the date is today
 *
 * @example
 * // If today is 6 October 2014, is 6 October 14:00:00 today?
 * const result = isToday(new Date(2014, 9, 6, 14, 0))
 * //=> true
 */
export default function isToday<DateType extends Date>(
  dirtyDate: DateType | number
): boolean {
  return isSameDay(dirtyDate, Date.now())
}
