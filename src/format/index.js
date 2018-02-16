import toDate from '../toDate/index.js'
import isValid from '../isValid/index.js'
import defaultLocale from '../locale/en-US/index.js'
import formatters from './_lib/formatters/index.js'
import longFormatters from './_lib/longFormatters/index.js'
import addUTCMinutes from '../_lib/addUTCMinutes/index.js'

// This RegExp consists of three parts separated by `|`:
// - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
//   (one of the certain letters followed by `o`)
// - (\w)\1* matches any sequences of the same letter
// - '' matches two quote characters in a row
// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
//   except a single quote symbol, which ends the sequence.
//   Two quote characters do not end the sequence.
//   If there is no matching single quote
//   then the sequence will continue until the end of the string.
// - . matches any single character unmatched by previous parts of the RegExps
var formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g

// This RegExp catches symbols escaped by quotes, and also
// sequences of symbols P, p, and the combinations like `PPPPPPPppppp`
var longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g

var escapedStringRegExp = /^'(.*?)'?$/
var doubleQuoteRegExp = /''/g

/**
 * @name format
 * @category Common Helpers
 * @summary Format the date.
 *
 * @description
 * Return the formatted date string in the given format. The result may vary by locale.
 *
 * The characters wrapped between two single quotes characters (') are escaped.
 * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
 * (see the last example)
 *
 * Format of the string is based on Unicode Technical Standard #35:
 * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * with a few additions (see note 7 below the table).
 *
 * Accepted patterns:
 * | Unit                            | Pattern | Result examples                   | Notes |
 * |---------------------------------|---------|-----------------------------------|-------|
 * | Era                             | G..GGG  | AD, BC                            |       |
 * |                                 | GGGG    | Anno Domini, Before Christ        | (2)   |
 * |                                 | GGGGG   | A, B                              |       |
 * | Calendar year                   | y       | 44, 1, 1900, 2017                 | (5)   |
 * |                                 | yo      | 44th, 1st, 0th, 17th              | (5)   |
 * |                                 | yy      | 44, 01, 00, 17                    | (5)   |
 * |                                 | yyy     | 044, 001, 1900, 2017              | (5)   |
 * |                                 | yyyy    | 0044, 0001, 1900, 2017            | (5)   |
 * |                                 | yyyyy   | ...                               | (3,5) |
 * | Local week-numbering year       | Y       | 44, 1, 1900, 2017                 | (5)   |
 * |                                 | Yo      | 44th, 1st, 1900th, 2017th         | (5)   |
 * |                                 | YY      | 44, 01, 00, 17                    | (5)   |
 * |                                 | YYY     | 044, 001, 1900, 2017              | (5)   |
 * |                                 | YYYY    | 0044, 0001, 1900, 2017            | (5)   |
 * |                                 | YYYYY   | ...                               | (3,5) |
 * | ISO week-numbering year         | R       | -43, 0, 1, 1900, 2017             | (5)   |
 * |                                 | RR      | -43, 00, 01, 1900, 2017           | (5)   |
 * |                                 | RRR     | -043, 000, 001, 1900, 2017        | (5)   |
 * |                                 | RRRR    | -0043, 0000, 0001, 1900, 2017     | (5)   |
 * |                                 | RRRRR   | ...                               | (3,5) |
 * | Extended year                   | u       | -43, 0, 1, 1900, 2017             | (5)   |
 * |                                 | uu      | -43, 01, 1900, 2017               | (5)   |
 * |                                 | uuu     | -043, 001, 1900, 2017             | (5)   |
 * |                                 | uuuu    | -0043, 0001, 1900, 2017           | (5)   |
 * |                                 | uuuuu   | ...                               | (3,5) |
 * | Quarter (formatting)            | Q       | 1, 2, 3, 4                        |       |
 * |                                 | Qo      | 1st, 2nd, 3rd, 4th                |       |
 * |                                 | QQ      | 01, 02, 03, 04                    |       |
 * |                                 | QQQ     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | QQQQ    | 1st quarter, 2nd quarter, ...     | (2)   |
 * |                                 | QQQQQ   | 1, 2, 3, 4                        | (4)   |
 * | Quarter (stand-alone)           | q       | 1, 2, 3, 4                        |       |
 * |                                 | qo      | 1st, 2nd, 3rd, 4th                |       |
 * |                                 | qq      | 01, 02, 03, 04                    |       |
 * |                                 | qqq     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | qqqq    | 1st quarter, 2nd quarter, ...     | (2)   |
 * |                                 | qqqqq   | 1, 2, 3, 4                        | (4)   |
 * | Month (formatting)              | M       | 1, 2, ..., 12                     |       |
 * |                                 | Mo      | 1st, 2nd, ..., 12th               |       |
 * |                                 | MM      | 01, 02, ..., 12                   |       |
 * |                                 | MMM     | Jan, Feb, ..., Dec                |       |
 * |                                 | MMMM    | January, February, ..., December  | (2)   |
 * |                                 | MMMMM   | J, F, ..., D                      |       |
 * | Month (stand-alone)             | L       | 1, 2, ..., 12                     |       |
 * |                                 | Lo      | 1st, 2nd, ..., 12th               |       |
 * |                                 | LL      | 01, 02, ..., 12                   |       |
 * |                                 | LLL     | Jan, Feb, ..., Dec                |       |
 * |                                 | LLLL    | January, February, ..., December  | (2)   |
 * |                                 | LLLLL   | J, F, ..., D                      |       |
 * | Local week of year              | w       | 1, 2, ..., 53                     |       |
 * |                                 | wo      | 1st, 2nd, ..., 53th               |       |
 * |                                 | ww      | 01, 02, ..., 53                   |       |
 * | ISO week of year                | I       | 1, 2, ..., 53                     |       |
 * |                                 | Io      | 1st, 2nd, ..., 53th               |       |
 * |                                 | II      | 01, 02, ..., 53                   |       |
 * | Day of month                    | d       | 1, 2, ..., 31                     |       |
 * |                                 | do      | 1st, 2nd, ..., 31st               |       |
 * |                                 | dd      | 01, 02, ..., 31                   |       |
 * | Day of year                     | D       | 1, 2, ..., 365, 366               |       |
 * |                                 | Do      | 1st, 2nd, ..., 365th, 366th       |       |
 * |                                 | DD      | 01, 02, ..., 365, 366             |       |
 * |                                 | DDD     | 001, 002, ..., 365, 366           |       |
 * |                                 | DDDD    | ...                               | (3)   |
 * | Day of week (formatting)        | E..EEE  | Mon, Tue, Wed, ..., Su            |       |
 * |                                 | EEEE    | Monday, Tuesday, ..., Sunday      | (2)   |
 * |                                 | EEEEE   | M, T, W, T, F, S, S               |       |
 * |                                 | EEEEEE  | Mo, Tu, We, Th, Fr, Su, Sa        |       |
 * | ISO day of week (formatting)    | i       | 1, 2, 3, ..., 7                   |       |
 * |                                 | io      | 1st, 2nd, ..., 7th                |       |
 * |                                 | ii      | 01, 02, ..., 07                   |       |
 * |                                 | iii     | Mon, Tue, Wed, ..., Su            |       |
 * |                                 | iiii    | Monday, Tuesday, ..., Sunday      | (2)   |
 * |                                 | iiiii   | M, T, W, T, F, S, S               |       |
 * |                                 | iiiiii  | Mo, Tu, We, Th, Fr, Su, Sa        |       |
 * | Local day of week (formatting)  | e       | 2, 3, 4, ..., 1                   |       |
 * |                                 | eo      | 2nd, 3rd, ..., 1st                |       |
 * |                                 | ee      | 02, 03, ..., 01                   |       |
 * |                                 | eee     | Mon, Tue, Wed, ..., Su            |       |
 * |                                 | eeee    | Monday, Tuesday, ..., Sunday      | (2)   |
 * |                                 | eeeee   | M, T, W, T, F, S, S               |       |
 * |                                 | eeeeee  | Mo, Tu, We, Th, Fr, Su, Sa        |       |
 * | Local day of week (stand-alone) | c       | 2, 3, 4, ..., 1                   |       |
 * |                                 | co      | 2nd, 3rd, ..., 1st                |       |
 * |                                 | cc      | 02, 03, ..., 01                   |       |
 * |                                 | ccc     | Mon, Tue, Wed, ..., Su            |       |
 * |                                 | cccc    | Monday, Tuesday, ..., Sunday      | (2)   |
 * |                                 | ccccc   | M, T, W, T, F, S, S               |       |
 * |                                 | cccccc  | Mo, Tu, We, Th, Fr, Su, Sa        |       |
 * | AM, PM                          | a..aaa  | AM, PM                            |       |
 * |                                 | aaaa    | a.m., p.m.                        | (2)   |
 * |                                 | aaaaa   | a, p                              |       |
 * | AM, PM, noon, midnight          | b..bbb  | AM, PM, noon, midnight            |       |
 * |                                 | bbbb    | a.m., p.m., noon, midnight        | (2)   |
 * |                                 | bbbbb   | a, p, n, mi                       |       |
 * | Flexible day period             | B..BBB  | at night, in the morning, ...     |       |
 * |                                 | BBBB    | at night, in the morning, ...     | (2)   |
 * |                                 | BBBBB   | at night, in the morning, ...     |       |
 * | Hour [1-12]                     | h       | 1, 2, ..., 11, 12                 |       |
 * |                                 | ho      | 1st, 2nd, ..., 11th, 12th         |       |
 * |                                 | hh      | 01, 02, ..., 11, 12               |       |
 * | Hour [0-23]                     | H       | 0, 1, 2, ..., 23                  |       |
 * |                                 | Ho      | 0th, 1st, 2nd, ..., 23rd          |       |
 * |                                 | HH      | 00, 01, 02, ..., 23               |       |
 * | Hour [0-11]                     | K       | 1, 2, ..., 11, 0                  |       |
 * |                                 | Ko      | 1st, 2nd, ..., 11th, 0th          |       |
 * |                                 | KK      | 1, 2, ..., 11, 0                  |       |
 * | Hour [1-24]                     | k       | 24, 1, 2, ..., 23                 |       |
 * |                                 | ko      | 24th, 1st, 2nd, ..., 23rd         |       |
 * |                                 | kk      | 24, 01, 02, ..., 23               |       |
 * | Minute                          | m       | 0, 1, ..., 59                     |       |
 * |                                 | mo      | 0th, 1st, ..., 59th               |       |
 * |                                 | mm      | 00, 01, ..., 59                   |       |
 * | Second                          | s       | 0, 1, ..., 59                     |       |
 * |                                 | so      | 0th, 1st, ..., 59th               |       |
 * |                                 | ss      | 00, 01, ..., 59                   |       |
 * | Fraction of second              | S       | 0, 1, ..., 9                      |       |
 * |                                 | SS      | 00, 01, ..., 99                   |       |
 * |                                 | SSS     | 000, 0001, ..., 999               |       |
 * |                                 | SSSS    | ...                               | (3)   |
 * | Timezone (ISO-8601 w/ Z)        | X       | -08, +0530, Z                     |       |
 * |                                 | XX      | -0800, +0530, Z                   |       |
 * |                                 | XXX     | -08:00, +05:30, Z                 |       |
 * |                                 | XXXX    | -0800, +0530, Z, +123456          | (2)   |
 * |                                 | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
 * | Timezone (ISO-8601 w/o Z)       | x       | -08, +0530, +00                   |       |
 * |                                 | xx      | -0800, +0530, +0000               |       |
 * |                                 | xxx     | -08:00, +05:30, +00:00            | (2)   |
 * |                                 | xxxx    | -0800, +0530, +0000, +123456      |       |
 * |                                 | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
 * | Timezone (GMT)                  | O...OOO | GMT-8, GMT+5:30, GMT+0            |       |
 * |                                 | OOOO    | GMT-08:00, GMT+05:30, GMT+00:00   | (2)   |
 * | Timezone (specific non-locat.)  | z...zzz | GMT-8, GMT+5:30, GMT+0            | (6)   |
 * |                                 | zzzz    | GMT-08:00, GMT+05:30, GMT+00:00   | (2,6) |
 * | Seconds timestamp               | t       | 512969520                         |       |
 * |                                 | tt      | ...                               | (3)   |
 * | Milliseconds timestamp          | T       | 512969520900                      |       |
 * |                                 | TT      | ...                               | (3)   |
 * | Long localized date             | P       | 5/29/53                           |       |
 * |                                 | PP      | May 29, 1453                      |       |
 * |                                 | PPP     | May 29th, 1453                    |       |
 * |                                 | PPPP    | Sunday, May 29th, 1453            | (2)   |
 * | Long localized time             | p       | 12:00 AM                          |       |
 * |                                 | pp      | 12:00:00 AM                       |       |
 * |                                 | ppp     | 12:00:00 AM GMT+2                 |       |
 * |                                 | pppp    | 12:00:00 AM GMT+02:00             | (2)   |
 * | Combination of date and time    | Pp      | 5/29/53, 12:00 AM                 |       |
 * |                                 | PPpp    | May 29, 1453, 12:00 AM            |       |
 * |                                 | PPPppp  | May 29th, 1453 at ...             |       |
 * |                                 | PPPPpppp| Sunday, May 29th, 1453 at ...     | (2)   |
 * Notes:
 * 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
 *   are the same as "stand-alone" units, but are different in some languages.
 *   "Formatting" units are declined according to the rules of the language
 *   in the context of a date. "Stand-alone" units are always nominative singular:
 *
 *   `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
 *   `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
 *
 * 2. Any sequence of the identical letters is a pattern, unless it is escaped by
 *   the single quote characters (see below).
 *   If the sequence is longer than listed in table (e.g. `EEEEEEEEEEE`)
 *   the output will be the same as default pattern for this unit, usually
 *   the longest one (in case of ISO weekdays, `EEEE`). Default patterns for units
 *   are marked with (2) in the last column of the table.
 *
 *   `format(new Date(2017, 10, 6), 'MMM') //=> 'Nov'`
 *   `format(new Date(2017, 10, 6), 'MMMM') //=> 'November'`
 *   `format(new Date(2017, 10, 6), 'MMMMM') //=> 'N'`
 *   `format(new Date(2017, 10, 6), 'MMMMMM') //=> 'November'`
 *   `format(new Date(2017, 10, 6), 'MMMMMMM') //=> 'November'`
 *
 * 3. Some patterns could be unlimited length (such as `yyyyyyyy`).
 *   The output will be padded with zeros to match the length of the pattern.
 *
 *   `format(new Date(2017, 10, 6), 'yyyyyyyy') //=> '00002017'`
 *
 * 4. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
 *   These tokens represent the shortest form of the quarter.
 *
 * 5. The main difference between `y` and `u` patterns are B.C. years:
 *   | Year | `y` | `u` |
 *   |------|-----|-----|
 *   | AC 1 |   1 |   1 |
 *   | BC 1 |   1 |   0 |
 *   | BC 2 |   2 |  -1 |
 *   Also `yy` always returns the last two digits of a year,
 *   while `uu` pads single digit years to 2 characters and returns other years unchanged:
 *   | Year | `yy` | `uu` |
 *   |------|------|------|
 *   | 1    |   01 |   01 |
 *   | 14   |   14 |   14 |
 *   | 376  |   76 |  376 |
 *   | 1453 |   53 | 1453 |
 *   The same difference is true for local and ISO week-numbering years (`Y` and `R`),
 *   except local week-numbering years are dependent on `options.weekStartsOn`
 *   and `options.firstWeekContainsDate` (compare [getISOWeekYear]{@link https://date-fns.org/docs/getISOWeekYear}
 *   and [getWeekYear]{@link https://date-fns.org/docs/getWeekYear}).
 *
 * 6. Specific non-location timezones are currently unavailable in `date-fns`,
 *   so right now these tokens fall back to GMT timezones.
 *
 * 7. These patterns are not in the Unicode Technical Standard #35:
 *   - `i`: ISO day of week field
 *   - `I`: ISO week of year
 *   - `R`: ISO week-numbering year
 *   - `t`: seconds timestamp
 *   - `T`: milliseconds timestamp
 *   - `o`: ordinal number modifier
 *   - `P`: long localized date
 *   - `p`: long localized time
 *
 * @param {Date|String|Number} date - the original date
 * @param {String} format - the string of tokens
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @param {Number} [options.firstWeekContainsDate=1] - the day of January, which is
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @returns {String} the formatted date string
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 * @throws {RangeError} `options.locale` must contain `localize` property
 * @throws {RangeError} `options.locale` must contain `formatLong` property
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 * @throws {RangeError} `options.firstWeekContainsDate` must be between 1 and 7
 *
 * @example
 * // Represent 11 February 2014 in middle-endian format:
 * var result = format(
 *   new Date(2014, 1, 11),
 *   'MM/dd/yyyy'
 * )
 * //=> '02/11/2014'
 *
 * @example
 * // Represent 2 July 2014 in Esperanto:
 * import { eoLocale } from 'date-fns/locale/eo'
 * var result = format(
 *   new Date(2014, 6, 2),
 *   "do 'de' MMMM yyyy",
 *   {locale: eoLocale}
 * )
 * //=> '2-a de julio 2014'
 *
 * @example
 * // Escape string by single quote characters:
 * var result = format(
 *   new Date(2014, 6, 2, 15),
 *   "h 'o''clock'"
 * )
 * //=> "3 o'clock"
 */
export default function format (dirtyDate, dirtyFormatStr, dirtyOptions) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present')
  }

  var formatStr = String(dirtyFormatStr)
  var options = dirtyOptions || {}

  var locale = options.locale || defaultLocale

  var localeFirstWeekContainsDate =
    locale.options &&
    locale.options.firstWeekContainsDate
  var defaultFirstWeekContainsDate =
    localeFirstWeekContainsDate === undefined
      ? 1
      : Number(localeFirstWeekContainsDate)
  var firstWeekContainsDate =
    options.firstWeekContainsDate === undefined
      ? defaultFirstWeekContainsDate
      : Number(options.firstWeekContainsDate)

  // Test if weekStartsOn is between 1 and 7 _and_ is not NaN
  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively')
  }

  var localeWeekStartsOn = locale.options && locale.options.weekStartsOn
  var defaultWeekStartsOn = localeWeekStartsOn === undefined ? 0 : Number(localeWeekStartsOn)
  var weekStartsOn = options.weekStartsOn === undefined ? defaultWeekStartsOn : Number(options.weekStartsOn)

  // Test if weekStartsOn is between 0 and 6 _and_ is not NaN
  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively')
  }

  if (!locale.localize) {
    throw new RangeError('locale must contain localize property')
  }

  var originalDate = toDate(dirtyDate, options)

  if (!isValid(originalDate, options)) {
    return 'Invalid Date'
  }

  // Convert the date in system timezone to the same date in UTC+00:00 timezone.
  // This ensures that when UTC functions will be implemented, locales will be compatible with them.
  // See an issue about UTC functions: https://github.com/date-fns/date-fns/issues/376
  var timezoneOffset = originalDate.getTimezoneOffset()
  var utcDate = addUTCMinutes(originalDate, -timezoneOffset, options)

  var formatterOptions = {
    firstWeekContainsDate: firstWeekContainsDate,
    weekStartsOn: weekStartsOn,
    locale: locale,
    _originalDate: originalDate
  }

  var result = formatStr
    .match(longFormattingTokensRegExp)
    .map(function (substring) {
      var firstCharacter = substring[0]
      if (firstCharacter === 'p' || firstCharacter === 'P') {
        var longFormatter = longFormatters[firstCharacter]
        return longFormatter(substring, locale.formatLong, formatterOptions)
      }
      return substring
    })
    .join('')
    .match(formattingTokensRegExp)
    .map(function (substring) {
      // Replace two single quote characters with one single quote character
      if (substring === "''") {
        return "'"
      }

      var firstCharacter = substring[0]
      if (firstCharacter === "'") {
        return cleanEscapedString(substring)
      }

      var formatter = formatters[firstCharacter]
      if (formatter) {
        return formatter(utcDate, substring, locale.localize, formatterOptions)
      }

      return substring
    })
    .join('')

  return result
}

function cleanEscapedString (input) {
  return input.match(escapedStringRegExp)[1].replace(doubleQuoteRegExp, "'")
}
