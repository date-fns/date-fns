import toDate from '../toDate/index'
import isValid from '../isValid/index'
import addLeadingZeros from '../_lib/addLeadingZeros/index'
import toInteger from '../_lib/toInteger/index'

/**
 * @name formatRFC3339
 * @category Common Helpers
 * @summary Format the date according to the RFC 3339 standard (https://tools.ietf.org/html/rfc3339#section-5.6).
 *
 * @description
 * Return the formatted date string in RFC 3339 format. Options may be passed to control the parts and notations of the date.
 *
 * @param {Date|Number} date - the original date
 * @param {Object} [options] - an object with options.
 * @param {0|1|2|3} [options.fractionDigits=0] - number of digits after the decimal point after seconds
 * @returns {String} the formatted date string
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `date` must not be Invalid Date
 * @throws {RangeError} `options.fractionDigits` must be between 0 and 3
 *
 * @example
 * // Represent 18 September 2019 in RFC 3339 format:
 * const result = formatRFC3339(new Date(2019, 8, 18, 19, 0, 52))
 * //=> '2019-09-18T19:00:52Z'
 *
 * @example
 * // Represent 18 September 2019 in RFC 3339 format, 2 digits of second fraction:
 * const result = formatRFC3339(new Date(2019, 8, 18, 19, 0, 52, 234), { fractionDigits: 2 })
 * //=> '2019-09-18T19:00:52.23Z'
 *
 * @example
 * // Represent 18 September 2019 in RFC 3339 format, 3 digits of second fraction
 * const result = formatRFC3339(new Date(2019, 8, 18, 19, 0, 52, 234), { fractionDigits: 3 })
 * //=> '2019-09-18T19:00:52.234Z'
 */
export default function formatRFC3339(dirtyDate, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError(
      `1 arguments required, but only ${arguments.length} present`
    )
  }

  const originalDate = toDate(dirtyDate)

  if (!isValid(originalDate)) {
    throw new RangeError('Invalid time value')
  }

  const options = dirtyOptions || {}
  const fractionDigits =
    options.fractionDigits == null ? 0 : toInteger(options.fractionDigits)

  // Test if fractionDigits is between 0 and 3 _and_ is not NaN
  if (!(fractionDigits >= 0 && fractionDigits <= 3)) {
    throw new RangeError('fractionDigits must be between 0 and 3 inclusively')
  }

  const day = addLeadingZeros(originalDate.getDate(), 2)
  const month = addLeadingZeros(originalDate.getMonth() + 1, 2)
  const year = originalDate.getFullYear()

  const hour = addLeadingZeros(originalDate.getHours(), 2)
  const minute = addLeadingZeros(originalDate.getMinutes(), 2)
  const second = addLeadingZeros(originalDate.getSeconds(), 2)

  let fractionalSecond = ''
  if (fractionDigits > 0) {
    const milliseconds = originalDate.getMilliseconds()
    const fractionalSeconds = Math.floor(
      milliseconds * Math.pow(10, fractionDigits - 3)
    )
    fractionalSecond = '.' + addLeadingZeros(fractionalSeconds, fractionDigits)
  }

  let offset = ''
  const tzOffset = originalDate.getTimezoneOffset()

  if (tzOffset !== 0) {
    const absoluteOffset = Math.abs(tzOffset)
    const hourOffset = addLeadingZeros(toInteger(absoluteOffset / 60), 2)
    const minuteOffset = addLeadingZeros(absoluteOffset % 60, 2)
    // If less than 0, the sign is +, because it is ahead of time.
    const sign = tzOffset < 0 ? '+' : '-'

    offset = `${sign}${hourOffset}:${minuteOffset}`
  } else {
    offset = 'Z'
  }

  return `${year}-${month}-${day}T${hour}:${minute}:${second}${fractionalSecond}${offset}`
}
