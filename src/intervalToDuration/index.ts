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
 * @param interval - the interval to convert to duration
 *
 * @returns The duration Object
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

  /* Edge case: If the start is Feb 29 (leap year) and we add years, then the resulting date may be Feb 28.
   * This means the intervalToDuration calculations will be off by one day if the remaining year is not also a
   * leap year.
   * We detect if the start was on Feb 29 (leap year) and calculate if we should add on an extra day to the
   * "remainingDays" date.
   */
  const startIsLeapYear =
    new Date(start.getFullYear(), 2 /* March */, 0).getDate() === 29
  const startDate = start.getDate()
  const isLastDayInFebruary =
    start.getMonth() === 1 &&
    (startIsLeapYear ? startDate === 29 : startDate === 28)
  const isLeapYearEnd =
    new Date(remainingMonths.getFullYear(), 2, 0).getDate() === 29
  const shouldAddExtraDay =
    isLastDayInFebruary && startIsLeapYear && !isLeapYearEnd

  const remainingDays = add(remainingMonths, {
    months: duration.months,
    days: shouldAddExtraDay ? 1 : 0,
  })
  duration.days = differenceInDays(end, remainingDays)

  const remainingHours = add(remainingDays, { days: duration.days })
  duration.hours = differenceInHours(end, remainingHours)

  const remainingMinutes = add(remainingHours, { hours: duration.hours })
  duration.minutes = differenceInMinutes(end, remainingMinutes)

  const remainingSeconds = add(remainingMinutes, { minutes: duration.minutes })
  duration.seconds = differenceInSeconds(end, remainingSeconds)

  return duration
}
