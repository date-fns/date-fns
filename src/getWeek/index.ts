import startOfWeek from '../startOfWeek/index'
import startOfWeekYear from '../startOfWeekYear/index'
import type {
  LocaleOptions,
  WeekStartOptions,
  FirstWeekContainsDateOptions,
} from '../types'
import { millisecondsInWeek } from '../constants/index'

/**
 * @name getWeek
 * @category Week Helpers
 * @summary Get the local week index of the given date.
 *
 * @description
 * Get the local week index of the given date.
 * The exact calculation depends on the values of
 * `options.weekStartsOn` (which is the index of the first day of the week)
 * and `options.firstWeekContainsDate` (which is the day of January, which is always in
 * the first week of the week-numbering year)
 *
 * Week numbering: https://en.wikipedia.org/wiki/Week#Week_numbering
 *
 * @param date - the given date
 * @param options - an object with options.
 * @returns the week
 *
 * @example
 * // Which week of the local week numbering year is 2 January 2005 with default options?
 * getISOWeek(new Date(2005, 0, 2))
 * //=> 2
 *
 * // Which week of the local week numbering year is 2 January 2005,
 * // if Monday is the first day of the week,
 * // and the first week of the year always contains 4 January?
 * getISOWeek(new Date(2005, 0, 2), {
 *   weekStartsOn: 1,
 *   firstWeekContainsDate: 4
 * })
 * //=> 53
 */
export default function getWeek(
  date: Date | number,
  options?: LocaleOptions & WeekStartOptions & FirstWeekContainsDateOptions
): number {
  const diff =
    startOfWeek(date, options).getTime() -
    startOfWeekYear(date, options).getTime()

  // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)
  return Math.round(diff / millisecondsInWeek) + 1
}
