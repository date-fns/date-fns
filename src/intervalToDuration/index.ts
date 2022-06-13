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
 * @throws {RangeError} The start of an interval cannot be after its end
 *
 * @example
 * // Get the duration between January 15, 1929 and April 4, 1968.
 * intervalToDuration({
 *   start: new Date(1929, 0, 15, 12, 0, 0),
 *   end: new Date(1968, 3, 4, 19, 5, 0)
 * })
 * // => { years: 39, months: 2, days: 20, hours: 7, minutes: 5, seconds: 0 }
 */
export default function interval<DateType extends Date>(
  interval: Interval<DateType>
): Duration {
  requiredArgs(1, arguments)

  const start = toDate(interval.start)
  const end = toDate(interval.end)

  if (isNaN(start.getTime())) throw new RangeError('Start Date is invalid')
  if (isNaN(end.getTime())) throw new RangeError('End Date is invalid')
  if (start > end) {
    throw new RangeError('The start of an interval cannot be after its end')
  }

  const duration: Duration = {
    years: differenceInYears(end, start),
  }

  const remainingMonths = add(start, { years: duration.years })
  duration.months = differenceInMonths(end, remainingMonths)

  const remainingDays = add(remainingMonths, { months: duration.months })
  duration.days = differenceInDays(end, remainingDays)

  const remainingHours = add(remainingDays, { days: duration.days })
  duration.hours = differenceInHours(end, remainingHours)

  const remainingMinutes = add(remainingHours, { hours: duration.hours })
  duration.minutes = differenceInMinutes(end, remainingMinutes)

  const remainingSeconds = add(remainingMinutes, { minutes: duration.minutes })
  duration.seconds = differenceInSeconds(end, remainingSeconds)

  return duration
}
