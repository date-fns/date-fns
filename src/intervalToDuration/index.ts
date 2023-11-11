import add from '../add/index'
import differenceInDays from '../differenceInDays/index'
import differenceInHours from '../differenceInHours/index'
import differenceInMinutes from '../differenceInMinutes/index'
import differenceInMonths from '../differenceInMonths/index'
import differenceInSeconds from '../differenceInSeconds/index'
import differenceInYears from '../differenceInYears/index'
import toDate from '../toDate/index'
import type { Duration, Interval } from '../types'

/**
 * @name intervalToDuration
 * @category Common Helpers
 * @summary Convert interval to duration
 *
 * @description
 * Convert a interval object to a duration object.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param interval - The interval to convert to duration
 *
 * @returns The duration object
 *
 * @example
 * // Get the duration between January 15, 1929 and April 4, 1968.
 * intervalToDuration({
 *   start: new Date(1929, 0, 15, 12, 0, 0),
 *   end: new Date(1968, 3, 4, 19, 5, 0)
 * })
 * // => { years: 39, months: 2, days: 20, hours: 7, minutes: 5, seconds: 0 }
 */
export default function intervalToDuration<DateType extends Date>(
  interval: Interval<DateType>
): Duration {
  const start = toDate(interval.start)
  const end = toDate(interval.end)

  const duration: Duration = {}

  const years = differenceInYears(end, start)
  if (years) duration.years = years

  const remainingMonths = add(start, { years: duration.years })

  const months = differenceInMonths(end, remainingMonths)
  if (months) duration.months = months

  const remainingDays = add(remainingMonths, { months: duration.months })

  const days = differenceInDays(end, remainingDays)
  if (days) duration.days = days

  const remainingHours = add(remainingDays, { days: duration.days })

  const hours = differenceInHours(end, remainingHours)
  if (hours) duration.hours = hours

  const remainingMinutes = add(remainingHours, { hours: duration.hours })

  const minutes = differenceInMinutes(end, remainingMinutes)
  if (minutes) duration.minutes = minutes

  const remainingSeconds = add(remainingMinutes, { minutes: duration.minutes })

  const seconds = differenceInSeconds(end, remainingSeconds)
  if (seconds) duration.seconds = seconds

  return duration
}
