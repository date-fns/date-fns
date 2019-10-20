import toDate from '../toDate/index.js'
import isValid from '../isValid/index.js'
import addLeadingZeros from '../_lib/addLeadingZeros/index.js'
import addMinutes from '../addMinutes/index.js'

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec'
]

/**
 * @name formatRFC7231
 * @category Common Helpers
 * @summary Format the date according to the RFC 7231 standard (https://tools.ietf.org/html/rfc7231#section-7.1.1.1).
 *
 * @description
 * Return the formatted date string in RFC 7231 format. Options may be passed to control the parts and notations of the date.
 *
 * @param {Date|Number} date - the original date
 * @param {Object} [options] - an object with options.
 * @param {Boolean} [options.date=true] - if true, the date part will be returned.
 * @param {Boolean} [options.time=true] - if true, the time part will be returned.
 * @returns {String} the formatted date string
 * @throws {TypeError} no parameters passed
 * @throws {RangeError} date parameter is not a number or a Date object
 *
 * @example
 * // Represent 18 September 2019 in RFC 7231 format:
 * const result = formatRFC7231(new Date(2019, 8, 18, 19, 0, 52))
 * //=> 'Wed, 18 Sep 2019 19:00:52 GMT'
 */
export default function formatRFC7231(dirtyDate) {
  if (arguments.length < 1) {
    throw new TypeError(
      `1 arguments required, but only ${arguments.length} present`
    )
  }

  const originalDate = toDate(dirtyDate)

  if (!isValid(originalDate)) {
    throw new RangeError('Invalid time value')
  }

  const tzOffset = originalDate.getTimezoneOffset()
  const utcDate = addMinutes(originalDate, tzOffset)

  const dayName = days[utcDate.getDay()]
  const dayOfMonth = addLeadingZeros(utcDate.getDate(), 2)
  const monthName = months[utcDate.getMonth()]
  const year = utcDate.getFullYear()

  const hour = addLeadingZeros(utcDate.getHours(), 2)
  const minute = addLeadingZeros(utcDate.getMinutes(), 2)
  const second = addLeadingZeros(utcDate.getSeconds(), 2)

  // Result variables.
  return `${dayName}, ${dayOfMonth} ${monthName} ${year} ${hour}:${minute}:${second} GMT`
}
