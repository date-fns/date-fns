import format from '../format/index.js'

// This FORMATS variable contains all the pre-defined date, time, and datetime formats.
// For each standard used, there is a link for the source.
const FORMATS = {
  // RFC7231 source: https://tools.ietf.org/html/rfc7231#section-7.1.1.1.
  RFC_7231: "E, dd MMM yyyy HH:mm:ss 'GMT'",
  RFC_7231_DATE: 'E, dd MMM yyyy',
  RFC_7231_TIME: "HH:mm:ss 'GMT'",
  // ISO8601 source: http://support.sas.com/documentation/cdl/en/lrdict/64316/HTML/default/viewer.htm#a003169814.htm.
  ISO_8601: "yyyy-MM-dd'T'HH:mm:ss",
  ISO_8601_SHORT: "yyyyMMdd'T'HHmmss",
  // ISO9075 source: https://dev.mysql.com/doc/refman/5.7/en/date-and-time-functions.html#function_get-format.
  ISO_9075: 'yyyy-MM-dd HH:mm:ss',
  ISO_9075_DATE: 'yyyy-MM-dd',
  ISO_9075_TIME: 'HH:mm:ss'
}

/**
 * @name formatConstants
 * @category Common Helpers
 * @summary Format the date using any of the standardized format.
 *
 * @description
 * Return the formatted date string in the given standardized format. The result may vary by locale.
 * Currently, the supported formats are RFC_7231, ISO_8601, and ISO_9075.
 *
 * Available formats:
 * | Format name                     | Result examples                   | Notes |
 * |---------------------------------|-----------------------------------|-------|
 * | RFC_7231                        | Sun, 01 Mar 2019 19:00:52 GMT     |       |
 * | RFC_7231_DATE                   | Sun, 01 Mar 2019                  |       |
 * | RFC_7231_TIME                   | 19:00:52 GMT                      |       |
 * | ISO_8601                        | 2019-03-01T19:00:52               |       |
 * | ISO_8601_SHORT                  | 20190301T190052                   |       |
 * | ISO_9075                        | 2019-03-01 19:00:52               |       |
 * | ISO_9075_DATE                   | 2019-03-01                        |       |
 * | ISO_9075_TIME                   | 19:00:52                          |       |
 *
 * @param {Date|Number} date - the original date
 * @param {String} formatName - standardized format name
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @param {Number} [options.firstWeekContainsDate=1] - the day of January, which is
 * @param {Boolean} [options.useAdditionalWeekYearTokens=false] - if true, allows usage of the week-numbering year tokens `YY` and `YYYY`;
 *   see: https://git.io/fxCyr
 * @param {Boolean} [options.useAdditionalDayOfYearTokens=false] - if true, allows usage of the day of year tokens `D` and `DD`;
 *   see: https://git.io/fxCyr
 * @returns {String} the formatted date string
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.locale` must contain `localize` property
 * @throws {RangeError} `options.locale` must contain `formatLong` property
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 * @throws {RangeError} `options.firstWeekContainsDate` must be between 1 and 7
 * @throws {RangeError} use `yyyy` instead of `YYYY` for formatting years; see: https://git.io/fxCyr
 * @throws {RangeError} use `yy` instead of `YY` for formatting years; see: https://git.io/fxCyr
 * @throws {RangeError} use `d` instead of `D` for formatting days of the month; see: https://git.io/fxCyr
 * @throws {RangeError} use `dd` instead of `DD` for formatting days of the month; see: https://git.io/fxCyr
 * @throws {RangeError} format string contains an unescaped latin alphabet character
 *
 * @example
 * // Represent 03 March 2019 in RFC_7231 format:
 * var result = formatConstants(new Date(2019, 2, 3, 19, 0, 52), 'RFC_7231')
 * //=> 'Sun, 01 Mar 2019 19:00:52 GMT'
 *
 * @example
 * // Represent 18 September 2019 in ISO_8601 format:
 * var result = formatConstants(new Date(2019, 8, 18, 19, 0, 52), 'ISO_8601')
 * //=> '2019-09-18T19:00:52'
 *
 * @example
 * // Represent 28 December 2019 in ISO_9075 format:
 * var result = formatConstants(new Date(2019, 11, 28, 19, 0, 52), 'ISO_9075')
 * //=> '2019-12-28 19:00:52'
 */
export default function formatConstants(
  dirtyDate,
  standardFormat,
  dirtyOptions
) {
  if (arguments.length < 2) {
    throw new TypeError(
      '2 arguments required, but only ' + arguments.length + ' present'
    )
  }

  // Check if the standard format passed in the parameter is valid.
  if (FORMATS[standardFormat] === undefined) {
    throw new TypeError(
      `Invalid format, expected any of {${Object.keys(FORMATS).join(' | ')}}`
    )
  }

  // Since we have the `format` function already, we can just re-use it.
  return format(dirtyDate, FORMATS[standardFormat], dirtyOptions)
}
