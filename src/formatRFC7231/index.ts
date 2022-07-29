import isValid from '../isValid/index'
import toDate from '../toDate/index'
import addLeadingZeros from '../_lib/addLeadingZeros/index'

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
  'Dec',
]

/**
 * @name formatRFC7231
 * @category Common Helpers
 * @summary Format the date according to the RFC 7231 standard (https://tools.ietf.org/html/rfc7231#section-7.1.1.1).
 *
 * @description
 * Return the formatted date string in RFC 7231 format.
 * The result will always be in UTC timezone.
 *
 * @param date - the original date
 * @returns the formatted date string
 * @throws {RangeError} `date` must not be Invalid Date
 *
 * @example
 * // Represent 18 September 2019 in RFC 7231 format:
 * const result = formatRFC7231(new Date(2019, 8, 18, 19, 0, 52))
 * //=> 'Wed, 18 Sep 2019 19:00:52 GMT'
 */
export default function formatRFC7231<DateType extends Date>(
  dirtyDate: DateType | number
): string {
  const originalDate = toDate(dirtyDate)

  if (!isValid(originalDate)) {
    throw new RangeError('Invalid time value')
  }

  const dayName = days[originalDate.getUTCDay()]
  const dayOfMonth = addLeadingZeros(originalDate.getUTCDate(), 2)
  const monthName = months[originalDate.getUTCMonth()]
  const year = originalDate.getUTCFullYear()

  const hour = addLeadingZeros(originalDate.getUTCHours(), 2)
  const minute = addLeadingZeros(originalDate.getUTCMinutes(), 2)
  const second = addLeadingZeros(originalDate.getUTCSeconds(), 2)

  // Result variables.
  return `${dayName}, ${dayOfMonth} ${monthName} ${year} ${hour}:${minute}:${second} GMT`
}
