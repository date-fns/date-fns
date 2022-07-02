import toDate from '../toDate/index'
import type { Interval } from '../types'
import requiredArgs from '../_lib/requiredArgs/index'

/**
 * @name clamp
 * @category Interval Helpers
 * @summary Return a date bounded by the start and the end of the given interval
 *
 * @description
 * Clamps a date to the lower bound with the start of the interval and the upper
 * bound with the end of the interval.
 *
 * - When the date is less than the start of the interval, the start is returned.
 * - When the date is greater than the end of the interval, the end is returned.
 * - Otherwise the date is returned.
 *
 * @example
 * // What is Mar, 21, 2021 bounded to an interval starting at Mar, 22, 2021 and ending at Apr, 01, 2021
 * const result = clamp(new Date(2021, 2, 21), {
 *   start: new Date(2021, 2, 22),
 *   end: new Date(2021, 3, 1),
 * })
 * //=> Mon Mar 22 2021 00:00:00
 *
 * @param {Date | Number} date - the date to be bounded
 * @param {Interval} interval - the interval to bound to
 * @returns {Date} the date bounded by the start and the end of the interval
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `date` must not be Invalid Date
 * @throws {RangeError} `start` must not be Invalid Date
 * @throws {RangeError} `end` must not be Invalid Date
 * @throws {RangeError} The start of an interval cannot be after its end
 */
export default function clamp(
  dirtyDate: Date | number,
  interval: Interval
): Date {
  requiredArgs(2, arguments)

  const date = toDate(dirtyDate)
  const start = toDate(interval.start)
  const end = toDate(interval.end)

  if (isNaN(date.getTime())) throw new RangeError('Date is invalid')
  if (isNaN(start.getTime())) throw new RangeError('Start Date is invalid')
  if (isNaN(end.getTime())) throw new RangeError('End Date is invalid')
  if (start > end) {
    throw new RangeError('The start of an interval cannot be after its end')
  }

  if (date <= start) return start
  if (date >= end) return end
  return date
}
