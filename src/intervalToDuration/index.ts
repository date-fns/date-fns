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
export default function intervalToDuration<DateType extends Date>(
  interval: Interval<DateType>
): Duration {
  const start = toDate(interval.start)
  const end = toDate(interval.end)

  if (isNaN(start.getTime())) throw new RangeError('Start Date is invalid')
  if (isNaN(end.getTime())) throw new RangeError('End Date is invalid')
  if (start > end) {
    throw new RangeError('The start of an interval cannot be after its end')
  }

  let backtrack = makeDuration()

  // eslint-disable-next-line no-constant-condition
  while (true) {
    const duration: Duration = {
      years: differenceInYears(end, start) - backtrack.years,
    }

    const remainingMonths = add(start, { years: duration.years })
    duration.months =
      differenceInMonths(end, remainingMonths) - backtrack.months
    if (duration.months < 0) {
      backtrack = makeDuration({ years: 1 })
      continue
    }

    const remainingDays = add(remainingMonths, { months: duration.months })
    duration.days = differenceInDays(end, remainingDays) - backtrack.days
    if (duration.days < 0) {
      backtrack = makeDuration({ months: 1 })
      continue
    }

    const remainingHours = add(remainingDays, { days: duration.days })
    duration.hours = differenceInHours(end, remainingHours) - backtrack.hours
    if (duration.hours < 0) {
      backtrack = makeDuration({ days: 1 })
      continue
    }

    const remainingMinutes = add(remainingHours, { hours: duration.hours })
    duration.minutes =
      differenceInMinutes(end, remainingMinutes) - backtrack.minutes
    if (duration.minutes < 0) {
      backtrack = makeDuration({ hours: 1 })
      continue
    }

    const remainingSeconds = add(remainingMinutes, {
      minutes: duration.minutes,
    })
    duration.seconds =
      differenceInSeconds(end, remainingSeconds) - backtrack.seconds
    if (duration.seconds < 0) {
      backtrack = makeDuration({ minutes: 1 })
      continue
    }

    return duration
  }
}

function makeDuration(d: Duration = {}): Required<Duration> {
  return {
    years: d.years ?? 0,
    months: d.months ?? 0,
    weeks: d.weeks ?? 0,
    days: d.days ?? 0,
    hours: d.hours ?? 0,
    minutes: d.minutes ?? 0,
    seconds: d.seconds ?? 0,
  }
}
