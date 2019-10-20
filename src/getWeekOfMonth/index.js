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
 * const result = getWeekOfMonth(new Date(2017, 10, 9))
 * //=> 2
 */
export default function getWeekOfMonth(date, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError(
      '1 argument required, but only ' + arguments.length + ' present'
    )
  }

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
