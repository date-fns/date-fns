import getWeekYear from '../getWeekYear/index'
import startOfWeek from '../startOfWeek/index'
import toInteger from '../_lib/toInteger/index'
import requiredArgs from '../_lib/requiredArgs/index'
import type {
  LocaleOptions,
  FirstWeekContainsDateOptions,
  WeekStartOptions,
} from '../types'

/**
 * @name startOfWeekYear
 * @category Week-Numbering Year Helpers
 * @summary Return the start of a local week-numbering year for the given date.
 *
 * @description
 * Return the start of a local week-numbering year.
 * The exact calculation depends on the values of
 * `options.weekStartsOn` (which is the index of the first day of the week)
 * and `options.firstWeekContainsDate` (which is the day of January, which is always in
 * the first week of the week-numbering year)
 *
 * Week numbering: https://en.wikipedia.org/wiki/Week#Week_numbering
 *
 * @param date - the original date
 * @param options - an object with options.
 * @returns the start of a week-numbering year
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 * @throws {RangeError} `options.firstWeekContainsDate` must be between 1 and 7
 *
 * @example
 * // The start of an a week-numbering year for 2 July 2005 with default settings:
 * const result = startOfWeekYear(new Date(2005, 6, 2))
 * //=> Sun Dec 26 2004 00:00:00
 *
 * @example
 * // The start of a week-numbering year for 2 July 2005
 * // if Monday is the first day of week
 * // and 4 January is always in the first week of the year:
 * const result = startOfWeekYear(new Date(2005, 6, 2), {
 *   weekStartsOn: 1,
 *   firstWeekContainsDate: 4
 * })
 * //=> Mon Jan 03 2005 00:00:00
 */
export default function startOfWeekYear(
  dirtyDate: Date | number,
  dirtyOptions?: LocaleOptions & FirstWeekContainsDateOptions & WeekStartOptions
): Date {
  requiredArgs(1, arguments)

  const options = dirtyOptions || {}
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

  const year = getWeekYear(dirtyDate, dirtyOptions)
  const firstWeek = new Date(0)
  firstWeek.setFullYear(year, 0, firstWeekContainsDate)
  firstWeek.setHours(0, 0, 0, 0)
  const date = startOfWeek(firstWeek, dirtyOptions)
  return date
}
