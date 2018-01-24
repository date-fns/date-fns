import toDate from '../toDate/index.js'
import isValid from '../isValid/index.js'
import defaultLocale from '../locale/en-US/index.js'
import formatters from './_lib/formatters/index.js'
import addUTCMinutes from '../_lib/addUTCMinutes/index.js'

// This RegExp consists of three parts separated by `|`:
// - (\w)\1*o? matches any sequences of the same letter
//   with an optional `o` character at the end
// - '' matches two quote characters in a row
// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
//   except a single quote symbol, which ends the sequence.
//   Two quote characters do not end the sequence.
//   If there is no matching single quote
//   then the sequence will continue until the end of the string.
// - . matches any single character unmatched by previous parts of the RegExps
var formattingTokensRegExp = /(\w)\1*o?|''|'(''|[^'])+('|$)|./g

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
 * Format of the string is based on Unicode Technical Standard #35:
 * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * with a few additions (ISO day of week field and ordinal number modifier)
 *
 * Accepted patterns:
 * | Unit                            | Pattern | Result examples                   | Ord | Notes |
 * |---------------------------------|---------|-----------------------------------|-----|-------|
 * | Era                             | G..GGG  | AD, BC                            |     |       |
 * |                                 | GGGG    | Anno Domini, Before Christ        |     | (2)   |
 * |                                 | GGGGG   | A, B                              |     |       |
 * | Calendar year                   | y       | 44, 1, 1900, 2017                 | yes | (6)   |
 * |                                 | yy      | 44, 01, 00, 17                    | yes | (6)   |
 * |                                 | yyy     | 044, 001, 1900, 2017              | yes | (6)   |
 * |                                 | yyyy    | 0044, 0001, 1900, 2017            | yes | (6)   |
 * |                                 | yyyyy+  | ...                               | yes | (3,6) |
 * | ISO week-numbering year         | Y       | -43, 1, 1900, 2017                | yes |       |
 * |                                 | YY      | -43, 01, 00, 17                   | yes |       |
 * |                                 | YYY     | -043, 001, 1900, 2017             | yes |       |
 * |                                 | YYYY    | -0043, 0001, 1900, 2017           | yes |       |
 * |                                 | YYYYY+  | ...                               | yes | (6)   |
 * | Extended year                   | u       | -43, 1, 1900, 2017                | yes | (6)   |
 * |                                 | uu      | -43, 01, 1900, 2017               | yes | (6)   |
 * |                                 | uuu     | -043, 001, 1900, 2017             | yes | (6)   |
 * |                                 | uuuu    | -0043, 0001, 1900, 2017           | yes | (6)   |
 * |                                 | uuuuu+  | ...                               | yes | (3,6) |
 * | Quarter (formatting)            | Q       | 1, 2, 3, 4                        | yes |       |
 * |                                 | QQ      | 01, 02, 03, 04                    | yes |       |
 * |                                 | QQQ     | Q1, Q2, Q3, Q4                    |     |       |
 * |                                 | QQQQ    | 1st quarter, 2nd quarter, ...     |     | (2)   |
 * |                                 | QQQQQ   | 1, 2, 3, 4                        |     | (5)   |
 * | Quarter (stand-alone)           | q       | 1, 2, 3, 4                        | yes |       |
 * |                                 | qq      | 01, 02, 03, 04                    | yes |       |
 * |                                 | qqq     | Q1, Q2, Q3, Q4                    |     |       |
 * |                                 | qqqq    | 1st quarter, 2nd quarter, ...     |     | (2)   |
 * |                                 | qqqqq   | 1, 2, 3, 4                        |     | (5)   |
 * | Month (formatting)              | M       | 1, 2, ..., 12                     | yes |       |
 * |                                 | MM      | 01, 02, ..., 12                   |     |       |
 * |                                 | MMM     | Jan, Feb, ..., Dec                |     |       |
 * |                                 | MMMM    | January, February, ..., December  |     | (2)   |
 * |                                 | MMMMM   | J, F, ..., D                      |     |       |
 * | Month (stand-alone)             | L       | 1, 2, ..., 12                     | yes |       |
 * |                                 | LL      | 01, 02, ..., 12                   | yes |       |
 * |                                 | LLL     | Jan, Feb, ..., Dec                |     |       |
 * |                                 | LLLL    | January, February, ..., December  |     | (2)   |
 * |                                 | LLLLL   | J, F, ..., D                      |     |       |
 * | ISO week of year                | w       | 1, 2, ..., 53                     | yes |       |
 * |                                 | ww      | 01, 02, ..., 53                   | yes |       |
 * | Day of month                    | d       | 1, 2, ..., 31                     | yes |       |
 * |                                 | dd      | 01, 02, ..., 31                   | yes |       |
 * | Day of year                     | D       | 1, 2, ..., 365, 366               | yes |       |
 * |                                 | DD      | 01, 02, ..., 365, 366             | yes |       |
 * |                                 | DDD     | 001, 002, ..., 365, 366           | yes |       |
 * |                                 | DDDD+   | ...                               | yes | (3)   |
 * | Day of week (formatting)        | E..EEE  | Mon, Tue, Wed, ..., Su            |     |       |
 * |                                 | EEEE    | Monday, Tuesday, ..., Sunday      |     | (2)   |
 * |                                 | EEEEE   | M, T, W, T, F, S, S               |     |       |
 * |                                 | EEEEEE  | Mo, Tu, We, Th, Fr, Su, Sa        |     |       |
 * | ISO day of week (formatting)    | i       | 1, 2, 3, ..., 7                   | yes |       |
 * |                                 | ii      | 01, 02, ..., 07                   | yes |       |
 * |                                 | iii     | Mon, Tue, Wed, ..., Su            |     |       |
 * |                                 | iiii    | Monday, Tuesday, ..., Sunday      |     | (2)   |
 * |                                 | iiiii   | M, T, W, T, F, S, S               |     |       |
 * |                                 | iiiiii  | Mo, Tu, We, Th, Fr, Su, Sa        |     |       |
 * | Local day of week (formatting)  | e       | 2, 3, 4, ..., 1                   | yes |       |
 * |                                 | ee      | 02, 03, ..., 01                   | yes |       |
 * |                                 | eee     | Mon, Tue, Wed, ..., Su            |     |       |
 * |                                 | eeee    | Monday, Tuesday, ..., Sunday      |     | (2)   |
 * |                                 | eeeee   | M, T, W, T, F, S, S               |     |       |
 * |                                 | eeeeee  | Mo, Tu, We, Th, Fr, Su, Sa        |     |       |
 * | Local day of week (stand-alone) | c       | 2, 3, 4, ..., 1                   | yes |       |
 * |                                 | cc      | 02, 03, ..., 01                   | yes |       |
 * |                                 | ccc     | Mon, Tue, Wed, ..., Su            |     |       |
 * |                                 | cccc    | Monday, Tuesday, ..., Sunday      |     | (2)   |
 * |                                 | ccccc   | M, T, W, T, F, S, S               |     |       |
 * |                                 | cccccc  | Mo, Tu, We, Th, Fr, Su, Sa        |     |       |
 * | AM, PM                          | a..aaa  | AM, PM                            |     |       |
 * |                                 | aaaa    | a.m., p.m.                        |     | (2)   |
 * |                                 | aaaaa   | a, p                              |     |       |
 * | AM, PM, noon, midnight          | b..bbb  | AM, PM, noon, midnight            |     |       |
 * |                                 | bbbb    | a.m., p.m., noon, midnight        |     | (2)   |
 * |                                 | bbbbb   | a, p, n, mi                       |     |       |
 * | Flexible day period             | B..BBB  | at night, in the morning, ...     |     |       |
 * |                                 | BBBB    | at night, in the morning, ...     |     | (2)   |
 * |                                 | BBBBB   | at night, in the morning, ...     |     |       |
 * | Hour [1-12]                     | h       | 1, 2, ..., 11, 12                 | yes |       |
 * |                                 | hh      | 01, 02, ..., 11, 12               | yes |       |
 * | Hour [0-23]                     | H       | 0, 1, 2, ..., 23                  | yes |       |
 * |                                 | HH      | 00, 01, 02, ..., 23               | yes |       |
 * | Hour [0-11]                     | K       | 1, 2, ..., 11, 0                  | yes |       |
 * |                                 | KK      | 1, 2, ..., 11, 0                  | yes |       |
 * | Hour [1-24]                     | k       | 24, 1, 2, ..., 23                 | yes |       |
 * |                                 | kk      | 24, 01, 02, ..., 23               | yes |       |
 * | Minute                          | m       | 0, 1, ..., 59                     | yes |       |
 * |                                 | mm      | 00, 01, ..., 59                   | yes |       |
 * | Second                          | s       | 0, 1, ..., 59                     | yes |       |
 * |                                 | ss      | 00, 01, ..., 59                   | yes |       |
 * | Fraction of second              | S       | 0, 1, ..., 9                      | yes |       |
 * |                                 | SS      | 00, 01, ..., 99                   | yes |       |
 * |                                 | SSS     | 000, 0001, ..., 999               | yes |       |
 * |                                 | SSSS+   | ...                               | yes | (3)   |
 * | Timezone (ISO-8601 w/ Z)        | X       | -08, +0530, Z                     |     |       |
 * |                                 | XX      | -0800, +0530, Z                   |     |       |
 * |                                 | XXX     | -08:00, +05:30, Z                 |     |       |
 * |                                 | XXXX    | -0800, +0530, Z, +123456          |     | (2)   |
 * |                                 | XXXXX   | -08:00, +05:30, Z, +12:34:56      |     |       |
 * | Timezone (ISO-8601 w/o Z)       | x       | -08, +0530, +00                   |     |       |
 * |                                 | xx      | -0800, +0530, +0000               |     |       |
 * |                                 | xxx     | -08:00, +05:30, +00:00            |     | (2)   |
 * |                                 | xxxx    | -0800, +0530, +0000, +123456      |     |       |
 * |                                 | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |     |       |
 * Notes:
 * 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
 *   are the same as "stand-alone" units, but are different in some languages.
 *   "Formatting" units are declined according to the rules of the language
 *   in the context of a date. "Stand-alone" units are always nominative singular.
 * 2. Any sequence of the identical letters is a pattern, unless it is escaped by
 *   the single quote characters (see below).
 *   If the sequence is longer than listed in table (e.g. `EEEEEEEEEEE`)
 *   the output will be the same as default pattern for this unit, usually
 *   the longest one (in case of ISO weekdays, `EEEE`). Default patterns for units
 *   are marked with (2) in the last column of the table.
 * 3. Some patterns could be unlimited length (such as `yyyyyyyyy`).
 *   The output will be padded with zeros to match the length of the pattern.
 * 4. Symbol `o` after the pattern transforms numerical units into ordinal numbers
 *   (see "Ord" column in the table). If the unit is non-numerical, `'o'` is ignored.
 *   (e.g. output for `LLLL` and `LLLLo` will be the same)
 * 5. `QQQQQ` and `qqqqq` could be not numerical in some locales.
 *   They are never transformed by ordinal number indicator.
 * 6. The main difference between `y` and `u` patterns are B.C. years:
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
 *
 * The characters wrapped between two single quotes characters (') are escaped.
 * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote
 * (see the last example)
 *
 * @param {Date|String|Number} date - the original date
 * @param {String} format - the string of tokens
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @returns {String} the formatted date string
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 * @throws {RangeError} `options.locale` must contain `localize` property
 * @throws {RangeError} `options.locale` must contain `formatLong` property
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

  var result = formatStr.match(formattingTokensRegExp)
    .map(function (substring) {
      // Replace two single quote characters with one single quote character
      if (substring === "''") {
        return "'"
      }

      var firstCharacter = substring[0]
      if (firstCharacter === "'") {
        return cleanEscapedString(substring)
      }

      // Detect ordinal modifier
      var ordinal = false
      var lastCharacter = substring[substring.length - 1]
      if (substring.length > 1 && lastCharacter === 'o') {
        substring = substring.slice(0, -1)
        ordinal = true
      }

      var formatterOptions = {
        weekStartsOn: options.weekStartsOn,
        ordinal: ordinal,
        locale: locale,
        _originalDate: originalDate
      }

      var formatter = formatters[firstCharacter]
      if (formatter) {
        return formatter(substring, utcDate, locale.localize, formatterOptions)
      }

      return substring
    })
    .join('')

  return result
}

function cleanEscapedString (input) {
  return input.match(escapedStringRegExp)[1].replace(doubleQuoteRegExp, "'")
}
