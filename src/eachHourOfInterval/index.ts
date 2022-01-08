import addHours from '../addHours/index'
import type { Interval, StepOptions } from '../types'

/**
 * @name eachHourOfInterval
 * @category Interval Helpers
 * @summary Return the array of hours within the specified time interval.
 *
 * @description
 * Return the array of hours within the specified time interval.
 *
 * @param interval - the interval. See [Interval]{@link https://date-fns.org/docs/Interval}
 * @param options - an object with options.
 * @returns {Date[]} the array with starts of hours from the hour of the interval start to the hour of the interval end
 * @throws {RangeError} `options.step` must be a number greater than 1
 * @throws {RangeError} The start of an interval cannot be after its end
 * @throws {RangeError} Date in interval cannot be `Invalid Date`
 *
 * @example
 * // Each hour between 6 October 2014, 12:00 and 6 October 2014, 15:00
 * const result = eachHourOfInterval({
 *   start: new Date(2014, 9, 6, 12),
 *   end: new Date(2014, 9, 6, 15)
 * })
 * //=> [
 * //   Mon Oct 06 2014 12:00:00,
 * //   Mon Oct 06 2014 13:00:00,
 * //   Mon Oct 06 2014 14:00:00,
 * //   Mon Oct 06 2014 15:00:00
 * // ]
 */
export default function eachHourOfInterval(
  interval: Interval,
  options?: StepOptions
): Date[] {
  const int = interval || {}
  const startDate = new Date(int.start)
  const endDate = new Date(int.end)

  const startTime = startDate.getTime()
  const endTime = endDate.getTime()

  // Throw an exception if start date is after end date or if any date is `Invalid Date`
  if (!(startTime <= endTime)) {
    throw new RangeError('Invalid interval')
  }

  const dates = []

  let currentDate = startDate
  currentDate.setMinutes(0, 0, 0)

  const step = Number(options?.step ?? 1)
  if (step < 1 || isNaN(step))
    throw new RangeError('`options.step` must be a number greater than 1')

  while (currentDate.getTime() <= endTime) {
    dates.push(new Date(currentDate))
    currentDate = addHours(currentDate, step)
  }

  return dates
}
