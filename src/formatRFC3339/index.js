import toDate from '../toDate/index.js'
import isValid from '../isValid/index.js'
import addLeadingZeros from '../_lib/addLeadingZeros/index.js'

/**
 * @name formatISO3339
 * @category Common Helpers
 * @summary Format the date according to the ISO 3339 standard (https://tools.ietf.org/html/rfc3339#section-5.6).
 *
 * @description
 * Return the formatted date string in ISO 3339 format. Options may be passed to control the parts and notations of the date.
 *
 * @param {Date|Number} date - the original date
 * @param {Object} [options] - an object with options.
 * @param {Boolean} [options.fraction=0] - returns the number of digits of millisecond (minimum: 0, maximum: 3).
 * @returns {String} the formatted date string
 * @throws {TypeError} no parameters passed
 * @throws {TypeError} `options.fraction` is invalid (either of less than 0 or more than 3).
 * @throws {RangeError} date parameter is not a number or a Date object
 *
 * @example
 * // Represent 18 September 2019 in ISO 3339 format:
 * const result = formatISO3339(new Date(2019, 8, 18, 19, 0, 52))
 * //=> '2019-09-18T19:00:52Z'
 *
 * @example
 * // Represent 18 September 2019 in ISO 3339 format, 2 milliseconds fraction:
 * const result = formatISO3339(new Date(2019, 8, 18, 19, 0, 52, 234), { fraction: 2 })
 * //=> '2019-09-18T19:00:52.23Z'
 *
 * @example
 * // Represent 18 September 2019 in ISO 3339 format, 3 milliseconds fraction
 * const result = formatISO3339(new Date(2019, 8, 18, 19, 0, 52, 234), { fraction: 3 })
 * //=> '2019-09-18T19:00:52.234Z'
 *
 * @example
 * // Represent 18 September 2019 in ISO 3339 format in Australian Eastern Standard Time:
 * const result = formatISO3339(new Date(2019, 8, 18, 19, 0, 52))
 * //=> '2019-09-18T19:00:52.234+10:00'
 */
export default function formatISO3339(
  dirtyDate,
  dirtyOptions = {
    fraction: 0
  }
) {
  if (arguments.length < 1) {
    throw new TypeError(
      `1 arguments required, but only ${arguments.length} present`
    )
  }

  const originalDate = toDate(dirtyDate)

  if (!isValid(originalDate)) {
    throw new RangeError('Invalid time value')
  }

  if (dirtyOptions.fraction < 0 || dirtyOptions.fraction > 3) {
    throw new TypeError('Fraction should be within the range of 0 and 3')
  }

  const day = addLeadingZeros(originalDate.getDate(), 2)
  const month = addLeadingZeros(originalDate.getMonth() + 1, 2)
  const year = originalDate.getFullYear()

  const hour = addLeadingZeros(originalDate.getHours(), 2)
  const minute = addLeadingZeros(originalDate.getMinutes(), 2)
  const second = addLeadingZeros(originalDate.getSeconds(), 2)

  let millisecond = ''

  if (dirtyOptions.fraction > 0) {
    const dirtyMillisecond = originalDate.getMilliseconds().toString()

    millisecond = `.${dirtyMillisecond.slice(0, dirtyOptions.fraction)}`
  }

  let offset = ''
  const tzOffset = originalDate.getTimezoneOffset()

  if (tzOffset !== 0) {
    const hourOffset = addLeadingZeros(tzOffset / 60, 2)
    const minuteOffset = addLeadingZeros(tzOffset % 60, 2)
    // If less than 0, the sign is +, because it is ahead of time.
    const sign = tzOffset < 0 ? '+' : '-'

    offset = `${sign}${hourOffset}${minuteOffset}`
  }

  return `${year}-${month}-${day}T${hour}:${minute}:${second}${millisecond}${offset}`
}
