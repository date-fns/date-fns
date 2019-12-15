import toDate from '../toDate/index.js'

/**
 * @name parseJSON
 * @category Common Helpers
 * @summary Parse a JSON date string
 *
 * @description
 * Converts a complete ISO date string in UTC time, the typical format for transmitting
 * a date in JSON, to a JavaScript `Date` instance.
 *
 * This is a minimal implementation for converting dates retrieved from a JSON API to
 * a `Date` instance which can be used with other functions in the `date-fns` library.
 * The following formats are supported:
 *
 *     - `2000-03-15T05:20:10.123Z`: The output of `.toISOString()` and `JSON.stringify(new Date())`
 *     - `2000-03-15T05:20:10Z`: Without milliseconds
 *     - `2000-03-15T05:20:10+00:00`: With a zero offset, the default JSON encoded format in some other languages
 *     - `2000-03-15T05:20:10+0000`: With a zero offset without a colon
 *     - `2000-03-15T05:20:10`: Without a trailing 'Z' symbol
 *     - `2000-03-15T05:20:10.134566`: Up to 6 digits in milliseconds field. Only first 3 are taken into account since JS does now allow fractional milliseconds
 *
 * For convenience and ease of use these other input types are also supported
 * via [toDate]{@link https://date-fns.org/docs/toDate}:
 *
 *     - A `Date` instance will be cloned
 *     - A `number` will be treated as a timestamp
 *
 * Any other input type or invalid date strings will return an `Invalid Date`.
 *
 * @param {String|Number|Date} argument A fully formed ISO1806 date string to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 */
export default function parseJSON(argument) {
  if (arguments.length < 1) {
    throw new TypeError(
      '1 argument required, but only ' + arguments.length + ' present'
    )
  }

  if (typeof argument === 'string') {
    var parts = argument.match(
      /(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})(?:\.(\d{0,6}))?(?:Z|\+00:?00)?/
    )
    if (parts) {
      return new Date(
        Date.UTC(
          +parts[1],
          parts[2] - 1,
          +parts[3],
          +parts[4],
          +parts[5],
          +parts[6],
          +((parts[7] || '0') + '00').substring(0, 3)
        )
      )
    }
    return new Date(NaN)
  }
  return toDate(argument)
}
