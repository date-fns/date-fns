import toDate from '../toDate/index.js'
import format from '../format/index.js'
import differenceInCalendarDays from '../differenceInCalendarDays/index.js'
import defaultLocale from '../locale/en-US/index.js'
import subMinutes from '../subMinutes/index.js'

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
 * | Previous 6 days           | last Sunday at 04:30 a.m. |
 * | Last day                  | yesterday at 04:30 a.m.   |
 * | Same day                  | today at 04:30 a.m.       |
 * | Next day                  | tomorrow at 04:30 a.m.    |
 * | Next 6 days               | Sunday at 04:30 a.m.      |
 * | Other                     | 12/31/2017                |
 *
 * @param {Date|String|Number} date - the date to format
 * @param {Date|String|Number} baseDate - the date to compare with
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @returns {String} the date in words
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 * @throws {RangeError} `options.locale` must contain `localize` property
 * @throws {RangeError} `options.locale` must contain `formatLong` property
 * @throws {RangeError} `options.locale` must contain `formatRelative` property
 */
export default function formatRelative (dirtyDate, dirtyBaseDate, dirtyOptions) {
  var date = toDate(dirtyDate, dirtyOptions)
  var baseDate = toDate(dirtyBaseDate, dirtyOptions)

  var options = dirtyOptions || {}
  var locale = options.locale || defaultLocale

  if (!locale.localize) {
    throw new RangeError('locale must contain localize property')
  }

  if (!locale.formatLong) {
    throw new RangeError('locale must contain formatLong property')
  }

  if (!locale.formatRelative) {
    throw new RangeError('locale must contain formatRelative property')
  }

  var diff = differenceInCalendarDays(date, baseDate, options)

  if (isNaN(diff)) {
    return 'Invalid Date'
  }

  var token
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

  var utcDate = subMinutes(date, date.getTimezoneOffset(), options)
  var utcBaseDate = subMinutes(baseDate, date.getTimezoneOffset(), options)
  var formatStr = locale.formatRelative(token, utcDate, utcBaseDate, options)
  return format(date, formatStr, options)
}
