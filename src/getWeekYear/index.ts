import startOfWeek from '../startOfWeek/index'
import toDate from '../toDate/index'
import toInteger from '../_lib/toInteger/index'
import requiredArgs from '../_lib/requiredArgs/index'
import {
  WeekStartOptions,
  LocaleOptions,
  FirstWeekContainsDateOptions,
} from '../types'

/**
 * @name getWeekYear
 * @category Week-Numbering Year Helpers
 * @summary Get the local week-numbering year of the given date.
 *
 * @description
 * Get the local week-numbering year of the given date.
 * The exact calculation depends on the values of
 * `options.weekStartsOn` (which is the index of the first day of the week)
 * and `options.firstWeekContainsDate` (which is the day of January, which is always in
 * the first week of the week-numbering year)
 *
 * Week numbering: https://en.wikipedia.org/wiki/Week#Week_numbering
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the given date
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @param {1|2|3|4|5|6|7} [options.firstWeekContainsDate=1] - the day of January, which is always in the first week of the year
 * @returns {Number} the local week-numbering year
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 * @throws {RangeError} `options.firstWeekContainsDate` must be between 1 and 7
 *
 * @example
 * // Which week numbering year is 26 December 2004 with the default settings?
 * const result = getWeekYear(new Date(2004, 11, 26))
 * //=> 2005
 *
 * @example
 * // Which week numbering year is 26 December 2004 if week starts on Saturday?
 * const result = getWeekYear(new Date(2004, 11, 26), { weekStartsOn: 6 })
 * //=> 2004
 *
 * @example
 * // Which week numbering year is 26 December 2004 if the first week contains 4 January?
 * const result = getWeekYear(new Date(2004, 11, 26), { firstWeekContainsDate: 4 })
 * //=> 2004
 */
export default function getWeekYear(
  dirtyDate: Date | number,
  options: LocaleOptions & WeekStartOptions & FirstWeekContainsDateOptions = {}
): number {
  requiredArgs(1, arguments)

  const date = toDate(dirtyDate)
  const year = date.getFullYear()

  const locale = options.locale
  const localeFirstWeekContainsDate =
    locale && locale.options && locale.options.firstWeekContainsDate
  const defaultFirstWeekContainsDate =
    localeFirstWeekContainsDate == null
      ? 1
      : toInteger(localeFirstWeekContainsDate)
  const firstWeekContainsDate =
    options.firstWeekContainsDate == null
      ? defaultFirstWeekContainsDate
      : toInteger(options.firstWeekContainsDate)

  // Test if weekStartsOn is between 1 and 7 _and_ is not NaN
  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError(
      'firstWeekContainsDate must be between 1 and 7 inclusively'
    )
  }

  const firstWeekOfNextYear = new Date(0)
  firstWeekOfNextYear.setFullYear(year + 1, 0, firstWeekContainsDate)
  firstWeekOfNextYear.setHours(0, 0, 0, 0)
  const startOfNextYear = startOfWeek(firstWeekOfNextYear, options)

  const firstWeekOfThisYear = new Date(0)
  firstWeekOfThisYear.setFullYear(year, 0, firstWeekContainsDate)
  firstWeekOfThisYear.setHours(0, 0, 0, 0)
  const startOfThisYear = startOfWeek(firstWeekOfThisYear, options)

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year
  } else {
    return year - 1
  }
}
