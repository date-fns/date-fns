import addDays from '../addDays/index'
import addMonths from '../addMonths/index'
import { Duration } from '../types'

/**
 * Add the specified years, months, weeks, days, hours, minutes and seconds to the given date.
 *
 * @param date - The date to be changed
 * @param duration - The object with years, months, weeks, days, hours, minutes and seconds to be added
 * @returns The new date with the seconds added
 *
 * @example
 * Add the following duration to 1 September 2014, 10:19:50:
 * ```ts
 * const result = add(new Date(2014, 8, 1, 10, 19, 50), {
 *   years: 2,
 *   months: 9,
 *   weeks: 1,
 *   days: 7,
 *   hours: 5,
 *   minutes: 9,
 *   seconds: 30,
 * })
 * //=> Thu Jun 15 2017 15:29:20
 * ```
 *
 * @category Common Helpers
 */
export default function add(
  dirtyDate: Date | number,
  duration: Duration
): Date {
  const years = duration.years ?? 0
  const months = duration.months ?? 0
  const weeks = duration.weeks ?? 0
  const days = duration.days ?? 0
  const hours = duration.hours ?? 0
  const minutes = duration.minutes ?? 0
  const seconds = duration.seconds ?? 0

  // Add years and months
  const date = new Date(dirtyDate)
  const dateWithMonths =
    months || years ? addMonths(date, months + years * 12) : date

  // Add weeks and days
  const dateWithDays =
    days || weeks ? addDays(dateWithMonths, days + weeks * 7) : dateWithMonths

  // Add days, hours, minutes and seconds
  const minutesToAdd = minutes + hours * 60
  const secondsToAdd = seconds + minutesToAdd * 60
  const msToAdd = secondsToAdd * 1000
  const finalDate = new Date(dateWithDays.getTime() + msToAdd)

  return finalDate
}
