import tzOffsetMinutes from '../_lib/tzOffsetMinutes/index.js'
import tzTokenizeDate from '../_lib/tzTokenizeDate/index.js'
import addMinutes from '../addMinutes/index.js'
import toDate from '../toDate/index.js'

/**
 * @name dateAtTimeZone
 * @category Time Zone Helpers
 * @summary Get a date/time in the local time of any time zone
 *
 * @description
 * Returns a date instance with the equivalent time of the provided date in the
 * time zone specified. In other words, if the new date is formatted it will show
 * the hours in the target time zone equivalent to the UTC time value of the
 * provided date, not the hours of the current system's time zone.
 *
 * @param {Date|String|Number} date - the date with the applicable UTC time
 * @param {String} timeZone - the time zone to get an equivalent time for, can be an offset or IANA time zone
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Date} the new date with the equivalent time in the time zone
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // In June 10am UTC is 6am in New York (-04:00)
 * const result = dateAtTimeZone('2014-06-25T10:00:00.000Z', 'America/New_York')
 * //=> Jun 25 2014 06:00:00
 */
export default function dateAtTimeZone (date, timeZone, options) {
  const cleanDate = toDate(date, options)

  if (!timeZone || timeZone === 'Z' || timeZone.charAt(0) === '+' || timeZone.charAt(0) === '-') {
    const utcDate = new Date(
      cleanDate.getUTCFullYear(), cleanDate.getUTCMonth(), cleanDate.getUTCDate(),
      cleanDate.getUTCHours(), cleanDate.getUTCMinutes(), cleanDate.getUTCSeconds()
    )
    const offsetMinutes = tzOffsetMinutes(timeZone, cleanDate)
    return offsetMinutes ? addMinutes(utcDate, -offsetMinutes) : utcDate
  }

  const [fYear, fMonth, fDay, fHour, fMinute, fSecond] = tzTokenizeDate(cleanDate, timeZone)
  return new Date(fYear, fMonth - 1, fDay, fHour, fMinute, fSecond)
}
