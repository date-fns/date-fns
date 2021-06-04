import max from '../max'
import min from '../min'
import toDate from '../toDate'
import requiredArgs from '../_lib/requiredArgs/index'

/**
 * @name clamp
 * @category Interval Helpers
 * @summary Return the date bounded by a start and end date
 *
 * @description
 * Clamps a date to a lower bound with start and upper bound with end.
 * When date is less than start, start is returned
 * When date is greater than end, end is returned
 * Otherwise the date is returned
 *
 *
 * Bounds the date
 *
 * @example
 * ```javascript
 * var interval = {
 *   start: new Date(2020, 01, 01),
 *   end: new Date(2020, 05, 03)
 * }
 * var date = new Date(2020, 06, 04)
 * var clampedDate = clamp(date, interval)
 * ```
 *
 * @param {Date | Number}  date the date to be bounded
 * @param {Interval} interval  the interval to bound to
 * @returns {Date} the Date value bounded by the min and max date
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} The start of an interval cannot be after it's end
 */
export default function clamp(
  dirtyDate: Date | number,
  { start, end }: Interval
): Date {
  requiredArgs(2, arguments)
  const date = toDate(dirtyDate)
  const minDate = toDate(start)
  const maxDate = toDate(end)

  return min([max([date, minDate]), maxDate])
}
