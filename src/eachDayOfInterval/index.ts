import toDate from '../toDate/index'
import type { Interval, StepOptions } from '../types'

/**
 * The {@link eachDayOfInterval} function options.
 */
export interface EachDayOfIntervalOptions extends StepOptions {}

/**
 * @name eachDayOfInterval
 * @category Interval Helpers
 * @summary Return the array of dates within the specified time interval.
 *
 * @description
 * Return the array of dates within the specified time interval.
 *
 * @param interval - the interval. See [Interval]{@link https://date-fns.org/docs/Interval}
 * @param options - an object with options.
 * @returns the array with starts of days from the day of the interval start to the day of the interval end
 * @throws {RangeError} `options.step` must be a number greater than 1
 * @throws {RangeError} The start of an interval cannot be after its end
 * @throws {RangeError} Date in interval cannot be `Invalid Date`
 *
 * @example
 * // Each day between 6 October 2014 and 10 October 2014:
 * const result = eachDayOfInterval({
 *   start: new Date(2014, 9, 6),
 *   end: new Date(2014, 9, 10)
 * })
 * //=> [
 * //   Mon Oct 06 2014 00:00:00,
 * //   Tue Oct 07 2014 00:00:00,
 * //   Wed Oct 08 2014 00:00:00,
 * //   Thu Oct 09 2014 00:00:00,
 * //   Fri Oct 10 2014 00:00:00
 * // ]
 */
export default function eachDayOfInterval<DateType extends Date>(
  interval: Interval<DateType>,
  options?: EachDayOfIntervalOptions
): DateType[] {
  const startDate = toDate(interval.start)
  const endDate = toDate(interval.end)

  const endTime = endDate.getTime()

  // Throw an exception if start date is after end date or if any date is `Invalid Date`
  if (!(startDate.getTime() <= endTime)) {
    throw new RangeError('Invalid interval')
  }

  const dates = []

  const currentDate = startDate
  currentDate.setHours(0, 0, 0, 0)

  const step = options?.step ?? 1
  if (step < 1 || isNaN(step))
    throw new RangeError('`options.step` must be a number greater than 1')

  while (currentDate.getTime() <= endTime) {
    dates.push(toDate(currentDate))
    currentDate.setDate(currentDate.getDate() + step)
    currentDate.setHours(0, 0, 0, 0)
  }

  return dates
}
