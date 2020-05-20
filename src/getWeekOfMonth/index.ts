import getDate from '../getDate/index.js'
import getDay from '../getDay/index.js'
import startOfMonth from '../startOfMonth/index.js'
import { WeekFnOptions } from '../types.js'

/**
 * @name getWeekOfMonth
 * @category Week Helpers
 * @summary Get the week of the month of the given date.
 *
 * @description
 * Get the week of the month of the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param date - The given date
 * @param options - The options object
 * @returns The week of month
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // Which week of the month is 9 November 2017?
 * const result = getWeekOfMonth(new Date(2017, 10, 9))
 * //=> 2
 */
export default function getWeekOfMonth(
  date: Date | number,
  options: WeekFnOptions = {}
) {
  const weekStartsOn =
    options.weekStartsOn ?? options.locale?.options?.weekStartsOn ?? 0

  const currentDayOfMonth = getDate(date)
  if (isNaN(currentDayOfMonth)) {
    return currentDayOfMonth
  }

  const startWeekDay = getDay(startOfMonth(date))
  let lastDayOfFirstWeek = 0

  if (startWeekDay >= weekStartsOn) {
    lastDayOfFirstWeek = weekStartsOn + 7 - startWeekDay
  } else {
    lastDayOfFirstWeek = weekStartsOn - startWeekDay
  }

  let weekNumber = 1
  if (currentDayOfMonth > lastDayOfFirstWeek) {
    const remainingDaysAfterFirstWeek = currentDayOfMonth - lastDayOfFirstWeek
    weekNumber = weekNumber + Math.ceil(remainingDaysAfterFirstWeek / 7)
  }
  return weekNumber
}
