/**
 * @category Types
 * @summary A locale object.
 *
 * @description
 * A locale object.
 *
 * If you don't specify a locale in options, default locale is `en-US`.
 *
 * @typedef {Object} Locale
 *
 * @property {string} [code] - the locale code (ISO 639-1 + optional country code)
 * @property {Function} [formatDistance] - the function that takes a token
 *   passed by `formatDistance` or `formatDistanceStrict` and payload,
 *   and returns localized distance in words.
 *   Required by `formatDistance` and `formatDistanceStrict`
 *
 * @property {Function} [formatRelative] - the function that takes a token
 *   passed by `formatRelative` and two dates and returns the localized relative date format.
 *   Required by `formatRelative`
 *
 * @property {Object} [localize] - the object with functions used to localize various values.
 *   Required by `format` and `formatRelative`
 * @property {Function} localize.ordinalNumber - the function that localizes an ordinal number
 * @property {Function} localize.era - the function that takes 0 or 1 and returns localized era
 * @property {Function} localize.quarter - the function that localizes a quarter
 * @property {Function} localize.month - the function that localizes a month
 * @property {Function} localize.day - the function that localizes a day of the week
 * @property {Function} localize.dayPeriod - the function that takes one of the strings
 *   'am', 'pm', 'midnight', 'noon', 'morning', 'afternoon', 'evening' or 'night'
 *   and returns localized time of the day
 *
 * @property {Object} [formatLong] - the object with functions that return localized formats
 * @property {Function} formatLong.date - the function that returns a localized long date format
 * @property {Function} formatLong.time - the function that returns a localized long time format
 * @property {Function} formatLong.dateTime - the function that returns a localized format of date and time combined
 *
 * @property {Object} [match] — the object with functions used to match and parse various localized values.
 *   Required by `parse`
 * @property {Function} match.ordinalNumber - the function that parses a localized ordinal number
 * @property {Function} match.era - the function that parses a localized era
 * @property {Function} match.quarter - the function that parses a localized quarter
 * @property {Function} match.month - the function that parses a localized month
 * @property {Function} match.day - the function that parses a localized day of the week
 * @property {Function} match.dayPeriod - the function that parses a localized time of the day
 *
 * @property {Object} [options] - an object with locale options.
 * @property {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday).
 *   Used by `differenceInCalendarWeeks`, `endOfWeek`, `format`, `getWeek`, `getWeekOfMonth`,
 *   `getWeeksInMonth`, `isSameWeek`, `isSameWeek`, `lastDayOfWeek`, `parse`, `setDay`,
 *   `setWeek`, `startOfWeek` and `startOfWeekYear`
 * @property {1|2|3|4|5|6|7} [options.firstWeekContainsDate=1] - the day of January,
 *   which is always in the first week of the year.
 *   Used by `format`, `getWeek`, `getWeekYear`, `parse`, `setWeek`, `setWeekYear` and `startOfWeekYear`.
 *
 * @throws {RangeError} `locale` must contain `localize` property. Thrown by `format` and `formatRelative`
 * @throws {RangeError} `locale` must contain `formatLong` property. Thrown by `format` and `formatRelative`
 * @throws {RangeError} `locale` must contain `formatRelative` property. Thrown by `formatRelative`
 * @throws {RangeError} `locale` must contain `formatDistance` property. Thrown by `formatDistance` and `formatDistanceStrict`
 * @throws {RangeError} `locale` must contain `match` property. Thrown by `parse`
 */
var Locale = {}

module.exports = Locale
