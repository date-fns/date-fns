import startOfWeek from '../startOfWeek/index'
import type { LocaleOptions, WeekStartOptions } from '../types'

/**
 * The {@link isSameWeek} function options.
 */
export interface IsSameWeekOptions extends WeekStartOptions, LocaleOptions {}

/**
 * @name isSameWeek
 * @category Week Helpers
 * @summary Are the given dates in the same week (and month and year)?
 *
 * @description
 * Are the given dates in the same week (and month and year)?
 *
 * @param dateLeft - the first date to check
 * @param dateRight - the second date to check
 * @param options - an object with options.
 * @returns the dates are in the same week (and month and year)
 *
 * @example
 * // Are 31 August 2014 and 4 September 2014 in the same week?
 * const result = isSameWeek(new Date(2014, 7, 31), new Date(2014, 8, 4))
 * //=> true
 *
 * @example
 * // If week starts with Monday,
 * // are 31 August 2014 and 4 September 2014 in the same week?
 * const result = isSameWeek(new Date(2014, 7, 31), new Date(2014, 8, 4), {
 *   weekStartsOn: 1
 * })
 * //=> false
 *
 * @example
 * // Are 1 January 2014 and 1 January 2015 in the same week?
 * const result = isSameWeek(new Date(2014, 0, 1), new Date(2015, 0, 1))
 * //=> false
 */
export default function isSameWeek<DateType extends Date>(
  dirtyDateLeft: DateType | number,
  dirtyDateRight: DateType | number,
  options?: IsSameWeekOptions
): boolean {
  const dateLeftStartOfWeek = startOfWeek(dirtyDateLeft, options)
  const dateRightStartOfWeek = startOfWeek(dirtyDateRight, options)

  return dateLeftStartOfWeek.getTime() === dateRightStartOfWeek.getTime()
}
