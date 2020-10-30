import toInteger from '../_lib/toInteger/index'
import toDate from '../toDate/index'
import requiredArgs from '../_lib/requiredArgs/index'
import { WeekStartOptions } from '../types'

/**
 * @name getDay
 * @category Weekday Helpers
 * @summary Get the day of the week of the given date.
 *
 * @description
 * Get the day of the week of the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the given date
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {0|1|2|3|4|5|6} the day of week, 0 represents Sunday
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Which day of the week is 29 February 2012?
 * const result = getDay(new Date(2012, 1, 29))
 * //=> 3
 * @example
 * // Which day of the week is 29 February 2012, with a weekStartsOn of Monday:
 * const result = getDay(new Date(2012, 1, 29), { weekStartsOn: 1 })
 * //=> 2
 */
export default function getDay(
  dirtyDate: Date | number,
  dirtyOptions?: WeekStartOptions
): number {
  requiredArgs(1, arguments)

  var options = dirtyOptions || {}
  var locale = options.locale
  var localeWeekStartsOn =
    locale && locale.options && locale.options.weekStartsOn
  var defaultWeekStartsOn =
    localeWeekStartsOn == null ? 0 : toInteger(localeWeekStartsOn)
  var weekStartsOn =
    options.weekStartsOn == null
      ? defaultWeekStartsOn
      : toInteger(options.weekStartsOn)

  const date = toDate(dirtyDate)
  const day = date.getDay()
  return (((day - weekStartsOn) % 7) + 7) % 7
}
