import format from '../format/index.js'
import toDate from '../toDate/index.js'

/**
 * @name setTimeZone
 * @category Time Zone Helpers
 * @summary Get a date (UTC time) of a date/time in a specific time zone
 *
 * @description
 * Returns a date instance with the UTC time of the provided date which had the
 * equivalent time in the time zone specified. In other words, if the input date
 * represented local time in a specific time zone, the output date's value will
 * give the UTC equivalent of that local time.
 *
 * @param {Date|String|Number} date - the date with the equivalent time
 * @param {String} timeZone - the time zone of the date, can be an offset or IANA time zone
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Date} the new date with the UTC time of the date and time zone
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // In June 10am in Los Angeles is 5pm UTC
 * const result = setTimeZone(new Date(2014, 5, 25, 10, 0, 0), 'America/Los_Angeles')
 * //=> 2014-06-25T17:00:00.000Z
 */
export default function setTimeZone (date, timeZone, options) {
  if (date instanceof Date) {
    date = format(date, 'YYYY-MM-DD[T]HH:mm:ss')
  }
  return toDate(date, Object.assign({timeZone}, options))
}
