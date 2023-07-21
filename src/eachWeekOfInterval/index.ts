import addWeeks from '../addWeeks/index'
import startOfWeek from '../startOfWeek/index'
import toDate from '../toDate/index'
import type { Interval, LocaleOptions, WeekStartOptions } from '../types'

/**
 * The {@link eachWeekOfInterval} function options.
 */
export interface EachWeekOfIntervalOptions
  extends WeekStartOptions,
    LocaleOptions {}

/**
 * @name eachWeekOfInterval
 * @category Interval Helpers
 * @summary Return the array of weeks within the specified time interval.
 *
 * @description
 * Return the array of weeks within the specified time interval.
 *
 * @param interval - the interval. See [Interval]{@link https://date-fns.org/docs/Interval}
 * @param options - an object with options.
 * @returns the array with starts of weeks from the week of the interval start to the week of the interval end
 * @throws {RangeError} The start of an interval cannot be after its end
 * @throws {RangeError} Date in interval cannot be `Invalid Date`
 *
 * @example
 * // Each week within interval 6 October 2014 - 23 November 2014:
 * const result = eachWeekOfInterval({
 *   start: new Date(2014, 9, 6),
 *   end: new Date(2014, 10, 23)
 * })
 * //=> [
 * //   Sun Oct 05 2014 00:00:00,
 * //   Sun Oct 12 2014 00:00:00,
 * //   Sun Oct 19 2014 00:00:00,
 * //   Sun Oct 26 2014 00:00:00,
 * //   Sun Nov 02 2014 00:00:00,
 * //   Sun Nov 09 2014 00:00:00,
 * //   Sun Nov 16 2014 00:00:00,
 * //   Sun Nov 23 2014 00:00:00
 * // ]
 */
export default function eachWeekOfInterval<DateType extends Date>(
  interval: Interval<DateType>,
  options?: EachWeekOfIntervalOptions
): DateType[] {
  const startDate = toDate(interval.start)
  const endDate = toDate(interval.end)

  let endTime = endDate.getTime()

  // Throw an exception if start date is after end date or if any date is `Invalid Date`
  if (!(startDate.getTime() <= endTime)) {
    throw new RangeError('Invalid interval')
  }

  const startDateWeek = startOfWeek(startDate, options)
  const endDateWeek = startOfWeek(endDate, options)

  // Some timezones switch DST at midnight, making start of day unreliable in these timezones, 3pm is a safe bet
  startDateWeek.setHours(15)
  endDateWeek.setHours(15)

  endTime = endDateWeek.getTime()

  const weeks = []

  let currentWeek = startDateWeek

  while (currentWeek.getTime() <= endTime) {
    currentWeek.setHours(0)
    weeks.push(toDate(currentWeek))
    currentWeek = addWeeks(currentWeek, 1)
    currentWeek.setHours(15)
  }

  return weeks
}
