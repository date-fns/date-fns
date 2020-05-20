import startOfWeek from '../startOfWeek/index.js'
import { WeekFnOptions } from '../types.js'

/**
 * @name isSameWeek
 * @category Week Helpers
 * @summary Are the given dates in the same week?
 *
 * @description
 * Are the given dates in the same week?
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param dateLeft - The first date to check
 * @param dateRight - The second date to check
 * @param options - The options object
 * @returns The dates are in the same week
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
 */
export default function isSameWeek(
  dateLeft: Date | number,
  dateRight: Date | number,
  options: WeekFnOptions = {}
) {
  const dateLeftStartOfWeek = startOfWeek(dateLeft, options)
  const dateRightStartOfWeek = startOfWeek(dateRight, options)
  return dateLeftStartOfWeek.getTime() === dateRightStartOfWeek.getTime()
}
