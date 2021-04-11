import addMinutes from '../addMinutes/index'
import toDate from '../toDate/index'
import startOfMinute from '../startOfMinute/index'
import requiredArgs from '../_lib/requiredArgs/index'

import { Interval, StepOptions } from '../types'

/**
 * @name eachMinuteOfInterval
 * @category Interval Helpers
 * @summary Return the array of minutes within the specified time interval.
 *
 * @description
 * Returns the array of minutes within the specified time interval.
 *
 * @param {Interval} interval - the interval. See [Interval]{@link https://date-fns.org/docs/Interval}
 * @param {Object} [options] - an object with options.
 * @param {Number} [options.step=1] - the step to increment by. The starts of minutes from the hour of the interval start to the hour of the interval end
 * @throws {TypeError} 1 argument requie value should be more than 1.
 * @returns {Date[]} the array withred
 * @throws {RangeError} `options.step` must be a number equal or greater than 1
 * @throws {RangeError} The start of an interval cannot be after its end
 * @throws {RangeError} Date in interval cannot be `Invalid Date`
 *
 * @example
 * // Each minute between 14 October 2020, 13:00 and 14 October 2020, 13:03
 * const result = eachMinuteOfInterval({
 *   start: new Date(2014, 9, 14, 13),
 *   end: new Date(2014, 9, 14, 13, 3)
 * })
 * //=> [
 * //   Wed Oct 14 2014 13:00:00,
 * //   Wed Oct 14 2014 13:01:00,
 * //   Wed Oct 14 2014 13:02:00,
 * //   Wed Oct 14 2014 13:03:00
 * // ]
 */
export default function eachMinuteOfInterval(
  interval: Interval,
  options?: StepOptions
): Date[] {
  requiredArgs(1, arguments)

  const startDate = startOfMinute(toDate(interval.start))
  const endDate = startOfMinute(toDate(interval.end))

  const startTime = startDate.getTime()
  const endTime = endDate.getTime()

  if (startTime >= endTime) {
    throw new RangeError('Invalid interval')
  }

  const dates = []

  let currentDate = startDate

  const step = options && 'step' in options ? Number(options.step) : 1
  if (step < 1 || isNaN(step))
    throw new RangeError(
      '`options.step` must be a number equal or greater than 1'
    )

  while (currentDate.getTime() <= endTime) {
    dates.push(toDate(currentDate))
    currentDate = addMinutes(currentDate, step)
  }

  return dates
}
