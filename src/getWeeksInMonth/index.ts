import differenceInCalendarWeeks from '../differenceInCalendarWeeks/index.js'
import lastDayOfMonth from '../lastDayOfMonth/index.js'
import startOfMonth from '../startOfMonth/index.js'
import { WeekFnOptions } from '../types.js'

/**
 * @name getWeeksInMonth
 * @category Week Helpers
 * @summary Get the number of calendar weeks a month spans.
 *
 * @description
 * Get the number of calendar weeks the month in the given date spans.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param date - The given date
 * @param options - The options object
 * @returns The number of calendar weeks
 *
 * @example
 * // How many calendar weeks does February 2015 span?
 * const result = getWeeksInMonth(new Date(2015, 1, 8))
 * //=> 4
 *
 * @example
 * // If the week starts on Monday,
 * // how many calendar weeks does July 2017 span?
 * const result = getWeeksInMonth(new Date(2017, 6, 5), { weekStartsOn: 1 })
 * //=> 6
 */
export default function getWeeksInMonth(
  date: Date | number,
  options: WeekFnOptions = {}
) {
  return (
    differenceInCalendarWeeks(
      lastDayOfMonth(date),
      startOfMonth(date),
      options
    ) + 1
  )
}
