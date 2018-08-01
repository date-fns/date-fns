import getTimezoneOffsetInMilliseconds from '../_lib/getTimezoneOffsetInMilliseconds/index.js'
import toDate from '../toDate/index.js'
import format from '../format/index.js'
import differenceInCalendarDays from '../differenceInCalendarDays/index.js'
import defaultLocale from '../locale/en-US/index.js'
import subMilliseconds from '../subMilliseconds/index.js'

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
 * @param {Date|String|Number} date - the date to format
 * @param {Date|String|Number} baseDate - the date to compare with
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {Formats} [options.formats=null] - the formats object from which the format is picked.
 *                  Falls back to default locale if none is provided.
 *                  Can be provided as either a function or an Object.
 * @returns {String} the date in words
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 * @throws {RangeError} `options.locale` must contain `localize` property
 * @throws {RangeError} `options.locale` must contain `formatLong` property
 * @throws {RangeError} `options.locale` must contain `formatRelative` property or formats be provided separately
 */
export default function formatRelative (dirtyDate, dirtyBaseDate, dirtyOptions) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present')
  }

  const date = toDate(dirtyDate, dirtyOptions)
  const baseDate = toDate(dirtyBaseDate, dirtyOptions)

  const options = dirtyOptions || {}
  const locale = options.locale || defaultLocale
  const formats = options.formats || locale.formatRelative

  if (!locale.localize) {
    throw new RangeError('locale must contain localize property')
  }

  if (!locale.formatLong) {
    throw new RangeError('locale must contain formatLong property')
  }

  if (!formats) {
    throw new RangeError('locale must contain formatRelative property or formats be provided separately')
  }

  const diff = differenceInCalendarDays(date, baseDate, options)

  if (isNaN(diff)) {
    return 'Invalid Date'
  }

  let token
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

  var utcDate = subMilliseconds(date, getTimezoneOffsetInMilliseconds(date), options)
  var utcBaseDate = subMilliseconds(baseDate, getTimezoneOffsetInMilliseconds(baseDate), options)
  var formatStr = typeof formats === 'function' ? formats(token, utcDate, utcBaseDate, options) : formats[token]
  return format(date, formatStr, options)
}
