import requiredArgs from '../_lib/requiredArgs/index'
import toInteger from '../_lib/toInteger/index'
import getDate from '../getDate/index'
import getDay from '../getDay/index'
import { LocaleOptions, WeekStartOptions } from '../types'
import startOfMonth from '../startOfMonth/index'

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
 * @param {Date|Number} date - the given date
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Number} the week of month
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // Which week of the month is 9 November 2017?
 * var result = getWeekOfMonth(new Date(2017, 10, 9))
 * //=> 2
 */
export default function getWeekOfMonth(
  date: Date | number,
  dirtyOptions?: LocaleOptions & WeekStartOptions
): number {
  requiredArgs(1, arguments)

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

  const dayOfMonth = getDate(date)

  if (isNaN(dayOfMonth)) {
    return dayOfMonth
  }

  const weekNumber = 1
  const startWeekDay = getDay(startOfMonth(date))
  const lastDayOfFirstWeek =
    startWeekDay >= weekStartsOn
      ? weekStartsOn + 7 - startWeekDay
      : weekStartsOn - startWeekDay

  return dayOfMonth > lastDayOfFirstWeek
    ? weekNumber + Math.ceil((dayOfMonth - lastDayOfFirstWeek) / 7)
    : weekNumber
}
