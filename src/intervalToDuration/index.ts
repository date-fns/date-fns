import compareAsc from '../compareAsc/index'
import add from '../add/index'
import differenceInDays from '../differenceInDays/index'
import differenceInHours from '../differenceInHours/index'
import differenceInMinutes from '../differenceInMinutes/index'
import differenceInMonths from '../differenceInMonths/index'
import differenceInSeconds from '../differenceInSeconds/index'
import differenceInYears from '../differenceInYears/index'
import toDate from '../toDate/index'
import type { Duration, Interval } from '../types'
import requiredArgs from '../_lib/requiredArgs/index'

/**
 * @name intervalToDuration
 * @category Common Helpers
 * @summary Convert interval to duration
 *
 * @description
 * Convert a interval object to a duration object.
 *
 * @param {Interval} interval - the interval to convert to duration
 *
 * @returns {Duration} The duration Object
 * @throws {TypeError} Requires 2 arguments
 * @throws {RangeError} `start` must not be Invalid Date
 * @throws {RangeError} `end` must not be Invalid Date
 *
 * @example
 * // Get the duration between January 15, 1929 and April 4, 1968.
 * intervalToDuration({
 *   start: new Date(1929, 0, 15, 12, 0, 0),
 *   end: new Date(1968, 3, 4, 19, 5, 0)
 * })
 * // => { years: 39, months: 2, days: 20, hours: 7, minutes: 5, seconds: 0 }
 */
export default function intervalToDuration(interval: Interval): Duration {
  requiredArgs(1, arguments)

  const start = toDate(interval.start)
  const end = toDate(interval.end)

  if (isNaN(start.getTime())) throw new RangeError('Start Date is invalid')
  if (isNaN(end.getTime())) throw new RangeError('End Date is invalid')

  const duration: Duration = {}
  duration.years = Math.abs(differenceInYears(end, start))

  const sign = compareAsc(end, start)

  const remainingMonths = add(start, { years: sign * duration.years })
  duration.months = Math.abs(differenceInMonths(end, remainingMonths))

  const remainingDays = add(remainingMonths, { months: sign * duration.months })
  duration.days = Math.abs(differenceInDays(end, remainingDays))

  const remainingHours = add(remainingDays, { days: sign * duration.days })
  duration.hours = Math.abs(differenceInHours(end, remainingHours))

  const remainingMinutes = add(remainingHours, { hours: sign * duration.hours })
  duration.minutes = Math.abs(differenceInMinutes(end, remainingMinutes))

  const remainingSeconds = add(remainingMinutes, {
    minutes: sign * duration.minutes,
  })
  duration.seconds = Math.abs(differenceInSeconds(end, remainingSeconds))

  return duration
}
