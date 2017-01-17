/**
 * @category Types
 * @summary An object passed as the last optional argument to all functions.
 *
 * @description
 * An object passed as the last optional argument to all functions.
 *
 * @typedef {Object} Options
 * @property {Number} [weekStartsOn=0] - the index of the first day of the week (0 - Sunday).
 *   Used by `differenceInCalendarWeeks`, `endOfWeek`, `isSameWeek`,
 *   `isThisWeek`, `lastDayOfWeek`, `setDay`, and `startOfWeek`
 * @property {0|1|2} [additionalDigits=2] - the additional number of digits in the extended year format.
 *   Used by all functions that take String as Date-like argument.
 *   Internally, passed to `toDate` to specify which way to convert extended year formatted String to Date.
 *   See [toDate]{@link docs/toDate}
 * @property {Locale} [locale=enLocale] - the locale object.
 *   Used by `distanceInWords`, `distanceInWordsStrict`, `format` and `parse`.
 *   See [Locale]{@link docs/Locale}
 * @property {'s'|'m'|'h'|'d'|'M'|'Y'} [unit] - used by `distanceInWordsStrict`.
 *   If specified, will force a unit
 * @property {'floor'|'ceil'|'round'} [partialMethod='floor'] - used by `distanceInWordsStrict`.
 *   Specifies, which way to round partial units
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
