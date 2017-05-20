/**
 * @category Types
 * @summary An object passed as the last optional argument to all functions.
 *
 * @description
 * An object passed as the last optional argument to all functions.
 *
 * @typedef {Object} Options
 * @property {0|1|2|3|4|5|6} [weekStartsOn=0] - the index of the first day of the week (0 - Sunday).
 *   Used by `differenceInCalendarWeeks`, `endOfWeek`, `isSameWeek`,
 *   `lastDayOfWeek`, `parse`, `setDay`, and `startOfWeek`
 * @property {0|1|2} [additionalDigits=2] - the additional number of digits in the extended year format.
 *   Used by all functions that take String as Date-like argument.
 *   Internally, passed to `toDate` to specify which way to convert extended year formatted String to Date.
 *   See [toDate]{@link https://date-fns.org/docs/toDate}
 * @property {Locale} [locale=defaultLocale] - the locale object.
 *   Used by `distanceInWords`, `distanceInWordsStrict`, `format` and `parse`.
 *   See [Locale]{@link https://date-fns.org/docs/Locale}
 * @property {Boolean} [includeSeconds=false] - used by `distanceInWords`.
 *   If true, distances less than a minute are more detailed
 * @property {Boolean} [addSuffix=false] - used by `distanceInWords` and `distanceInWordsStrinct`.
 *   If true, the result will indicate if the second date is earlier or later than the first
 * @property {'s'|'m'|'h'|'d'|'M'|'Y'} [unit] - used by `distanceInWordsStrict`.
 *   If specified, will force a unit
 * @property {'floor'|'ceil'|'round'} [roundingMethod='floor'] - used by `distanceInWordsStrict`.
 *   Specifies, which way to round partial units
 *
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2.
 *   Thrown by **all** functions
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6.
 *   Thrown by `differenceInCalendarWeeks`, `endOfWeek`, `isSameWeek`,
 *   `lastDayOfWeek`, `parse`, `setDay`, and `startOfWeek`.
 * @throws {RangeError} `options.roundingMethod` must be 'floor', 'ceil' or 'round'.
 *   Thrown by `distanceInWordsStrict`
 * @throws {RangeError} `options.unit` must be 's', 'm', 'h', 'd', 'M' or 'Y'.
 *   Thrown by `distanceInWordsStrict`
 *
 * @example
 * // For 15 December 12345 AD, represent the start of the week in Esperanto,
 * // if the first day of the week is Monday:
 * var eoLocale = require('date-fns/locale/eo')
 * var options = {
 *   weekStartsOn: 1,
 *   additionalDigits: 1,
 *   locale: eoLocale
 * }
 * var result = format(startOfWeek('+12345-12-15', options), 'dddd, D MMMM YYYY', options)
 * //=> 'lundo, 10 decembro 12345'
 */
var Options = {}

module.exports = Options
