import differenceInCalendarWeeks from '../differenceInCalendarWeeks/index'
import lastDayOfMonth from '../lastDayOfMonth/index'
import startOfMonth from '../startOfMonth/index'
import { LocaleOptions, WeekStartOptions } from '../types'

/**
 * @name getWeeksInMonth
 * @category Week Helpers
 * @summary Get the number of calendar weeks a month spans.
 *
 * @description
 * Get the number of calendar weeks the month in the given date spans.
 *
 * @param date - the given date
 * @param options - an object with options.
 * @returns the number of calendar weeks
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // How many calendar weeks does February 2015 span?
 * getWeeksInMonth(new Date(2015, 1, 8))
 * //=> 4
 *
 * @example
 * // If the week starts on Monday,
 * // how many calendar weeks does July 2017 span?
 * getWeeksInMonth(new Date(2017, 6, 5), { weekStartsOn: 1 })
 * //=> 6
 */
export default function getWeeksInMonth(
  date: Date | number,
  options?: LocaleOptions & WeekStartOptions
): number {
  return (
    differenceInCalendarWeeks(
      lastDayOfMonth(date),
      startOfMonth(date),
      options
    ) + 1
  )
}
