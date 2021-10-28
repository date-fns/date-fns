import startOfWeek from '../startOfWeek/index'
import { WeekStartOptions, LocaleOptions } from '../types'

/**
 * @name isSameWeek
 * @category Week Helpers
 * @summary Are the given dates in the same week?
 *
 * @description
 * Are the given dates in the same week?
 *
 * @param dateLeft - the first date to check
 * @param dateRight - the second date to check
 * @param options - an object with options.
 * @returns the dates are in the same week
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // Are 31 August 2014 and 4 September 2014 in the same week?
 * isSameWeek(new Date(2014, 7, 31), new Date(2014, 8, 4))
 * //=> true
 *
 * @example
 * // If week starts with Monday,
 * // are 31 August 2014 and 4 September 2014 in the same week?
 * isSameWeek(new Date(2014, 7, 31), new Date(2014, 8, 4), {
 *   weekStartsOn: 1
 * })
 * //=> false
 */
export default function isSameWeek(
  dateLeft: Date | number,
  dateRight: Date | number,
  options?: LocaleOptions & WeekStartOptions
): boolean {
  const dateLeftStartOfWeek = startOfWeek(dateLeft, options)
  const dateRightStartOfWeek = startOfWeek(dateRight, options)

  return dateLeftStartOfWeek.getTime() === dateRightStartOfWeek.getTime()
}
