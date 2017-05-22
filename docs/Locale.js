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
 * @property {Function} formatDistance - the function that takes a token
 *   passed by `formatDistance` or `formatDistanceStrict` and payload,
 *   and returns localized distance in words.
 *   Required by `formatDistance` and `formatDistanceStrict`
 *
 * @property {Function} formatLong - the function that takes a token
 *   passed by `format` and returns the long format corresponding to this token.
 *   Required by `format`, `formatRelative` and `parse`
 *
 * @property {Function} formatRelative - the function that takes a token
 *   passed by `formatRelative` and two dates and returns the localized relative date format.
 *   Required by `formatRelative`
 *
 * @property {Object} localize - the object with functions used to localize various values.
 *   Required by `format` and `formatRelative`
 * @property {Function} localize.ordinalNumber - the function that localizes an ordinal number
 * @property {Function} localize.weekday - the function that localizes a day of the week
 * @property {Function} localize.weekdays - the function that returns an array of localized days of the week
 * @property {Function} localize.month - the function that localizes a month
 * @property {Function} localize.months - the function that returns an array of localized months
 * @property {Function} localize.timeOfDay - the function that takes hour and returns localized time of the day
 * @property {Function} localize.timesOfDay - the function that returns an array of localized times of the day
 *   without any association with hours
 *
 * @property {Object} match — the object with functions used to match and parse various localized values.
 *   Required by `parse`
 * @property {Function} match.ordinalNumbers - the function that matches localized ordinal numbers
 * @property {Function} match.ordinalNumber - the function that parses localized ordinal number
 * @property {Function} match.weekdays - the function that matches localized days of the weeks
 * @property {Function} match.weekday - the function that parses localized day of the week
 * @property {Function} match.months - the function that matches localized months
 * @property {Function} match.month - the function that parses localized month
 * @property {Function} match.timesOfDay - the function that matches localized times of the day
 * @property {Function} match.timeOfDay - the function that parses localized time of the day
 *
 * @property {Object} [formatters] - the object with formatter functions used by `format`
 * @property {RegExp} [formattingTokensRegExp] - a RegExp used to split a format string into the token array by `format`
 *
 * @property {Object} [units] - the object with units used by `parse`
 * @property {Object} [parsers] - the object with parsers used by `parse`
 * @property {RegExp} [parsingTokensRegExp] - a RegExp used to split a format string into the token array by `parse`
 *
 * @property {Object} [options] - the object with default `weekStartsOn`. See [Options]{@link https://date-fns.org/docs/Options}
 * @property {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday).
 *   Used by `differenceInCalendarWeeks`, `endOfWeek`, `isSameWeek`,
 *   `lastDayOfWeek`, `parse`, `setDay`, and `startOfWeek`
 *
 * @throws {RangeError} `locale` must contain `localize` property. Thrown by `format` and `formatRelative`
 * @throws {RangeError} `locale` must contain `formatLong` property. Thrown by `format`, `formatRelative` and `parse`
 * @throws {RangeError} `locale` must contain `formatRelative` property. Thrown by `formatRelative`
 * @throws {RangeError} `locale` must contain `formatDistance` property. Thrown by `formatDistance` and `formatDistanceStrict`
 * @throws {RangeError} `locale` must contain `match` property. Thrown by `parse`
 */
var Locale = {}

module.exports = Locale
