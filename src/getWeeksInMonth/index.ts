import differenceInCalendarWeeks from '../differenceInCalendarWeeks/index.js'
import lastDayOfMonth from '../lastDayOfMonth/index.js'
import startOfMonth from '../startOfMonth/index.js'

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
 * @param [options] - The options object
 * @param
 * @param [options.weekStartsOn=0] - The index of the first day of the week (0 - Sunday)
 * @returns The number of calendar weeks
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // How many calendar weeks does February 2015 span?
 * var result = getWeeksInMonth(new Date(2015, 1, 8))
 * //=> 4
 *
 * @example
 * // If the week starts on Monday,
 * // how many calendar weeks does July 2017 span?
 * var result = getWeeksInMonth(new Date(2017, 6, 5), { weekStartsOn: 1 })
 * //=> 6
 */
export default function getWeeksInMonth(date, options): number {
  return (
    differenceInCalendarWeeks(
      lastDayOfMonth(date),
      startOfMonth(date),
      options
    ) + 1
  )
}
