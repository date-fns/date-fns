import getDate from '../getDate/index.js'
import getDay from '../getDay/index.js'
import startOfMonth from '../startOfMonth/index.js'
import toInteger from '../_lib/toInteger/index.js'

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
 * @param [options] - The options object
 * @param
 * @param [options.weekStartsOn=0] - The index of the first day of the week (0 - Sunday)
 * @returns The week of month
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // Which week of the month is 9 November 2017?
 * const result = getWeekOfMonth(new Date(2017, 10, 9))
 * //=> 2
 */
export default function getWeekOfMonth(date, dirtyOptions): number {
  const options = dirtyOptions || {}
  const locale = options.locale
  const localeWeekStartsOn =
    locale && locale.options && locale.options.weekStartsOn
  const defaultWeekStartsOn =
    localeWeekStartsOn == null ? 0 : toInteger(localeWeekStartsOn)
  const weekStartsOn =
    options.weekStartsOn == null
      ? defaultWeekStartsOn
      : toInteger(options.weekStartsOn)

  // Test if weekStartsOn is between 0 and 6 _and_ is not NaN
  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively')
  }

  const currentDayOfMonth = getDate(date)
  if (isNaN(currentDayOfMonth)) {
    return currentDayOfMonth
  }

  const startWeekDay = getDay(startOfMonth(date))
  const lastDayOfFirstWeek = 0

  if (startWeekDay >= weekStartsOn) {
    lastDayOfFirstWeek = weekStartsOn + 7 - startWeekDay
  } else {
    lastDayOfFirstWeek = weekStartsOn - startWeekDay
  }

  const weekNumber = 1

  if (currentDayOfMonth > lastDayOfFirstWeek) {
    const remainingDaysAfterFirstWeek = currentDayOfMonth - lastDayOfFirstWeek
    weekNumber = weekNumber + Math.ceil(remainingDaysAfterFirstWeek / 7)
  }
  return weekNumber
}
