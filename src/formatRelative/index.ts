import differenceInCalendarDays from '../differenceInCalendarDays/index'
import format from '../format/index'
import defaultLocale from '../locale/en-US/index'
import subMilliseconds from '../subMilliseconds/index'
import toDate from '../toDate/index'
import getTimezoneOffsetInMilliseconds from '../_lib/getTimezoneOffsetInMilliseconds/index'
import requiredArgs from '../_lib/requiredArgs/index'
import type { PartialLocaleOptions, WeekStartOptions } from '../types'
import type { FormatRelativeToken } from '../locale/types'

/**
 * @name formatRelative
 * @category Common Helpers
 * @summary Represent the date in words relative to the given base date.
 *
 * @description
 * Represent the date in words relative to the given base date.
 *
 * | Distance to the base date | Result                    |
 * |---------------------------|---------------------------|
 * | Previous 6 days           | last Sunday at 04:30 AM   |
 * | Last day                  | yesterday at 04:30 AM     |
 * | Same day                  | today at 04:30 AM         |
 * | Next day                  | tomorrow at 04:30 AM      |
 * | Next 6 days               | Sunday at 04:30 AM        |
 * | Other                     | 12/31/2017                |
 *
 * @param {Date|Number} date - the date to format
 * @param {Date|Number} baseDate - the date to compare with
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {String} the date in words
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `date` must not be Invalid Date
 * @throws {RangeError} `baseDate` must not be Invalid Date
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 * @throws {RangeError} `options.locale` must contain `localize` property
 * @throws {RangeError} `options.locale` must contain `formatLong` property
 * @throws {RangeError} `options.locale` must contain `formatRelative` property
 *
 * @example
 * // Represent the date of 6 days ago in words relative to the given base date. In this example, today is Wednesday
 * const result = formatRelative(addDays(new Date(), -6), new Date())
 * //=> "last Thursday at 12:45 AM"
 */
export default function formatRelative(
  dirtyDate: Date | number,
  dirtyBaseDate: Date | number,
  dirtyOptions?: PartialLocaleOptions & WeekStartOptions
): string {
  requiredArgs(2, arguments)

  const date = toDate(dirtyDate)
  const baseDate = toDate(dirtyBaseDate)

  const weekStartsOn = dirtyOptions?.weekStartsOn || defaultLocale.options?.weekStartsOn || 0;
  const locale = { ...defaultLocale, ...(dirtyOptions?.locale || {}) }

  const diff = differenceInCalendarDays(date, baseDate)

  if (isNaN(diff)) {
    throw new RangeError('Invalid time value')
  }

  let token: FormatRelativeToken
  if (diff < -6) {
    token = 'other'
  } else if (diff < -1) {
    token = 'lastWeek'
  } else if (diff < 0) {
    token = 'yesterday'
  } else if (diff < 1) {
    token = 'today'
  } else if (diff < 2) {
    token = 'tomorrow'
  } else if (diff < 7) {
    token = 'nextWeek'
  } else {
    token = 'other'
  }

  const utcDate = subMilliseconds(date, getTimezoneOffsetInMilliseconds(date))
  const utcBaseDate = subMilliseconds(
    baseDate,
    getTimezoneOffsetInMilliseconds(baseDate)
  )
  const formatStr = locale.formatRelative(token, utcDate, utcBaseDate, {
    locale,
    weekStartsOn,
  })
  return format(date, formatStr, { locale, weekStartsOn })
}
