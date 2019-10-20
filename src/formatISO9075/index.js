import toDate from '../toDate/index.js'
import isValid from '../isValid/index.js'
import addLeadingZeros from '../_lib/addLeadingZeros/index.js'

/**
 * @name formatISO9075
 * @category Common Helpers
 * @summary Format the date according to the ISO 9075 standard (https://dev.mysql.com/doc/refman/5.7/en/date-and-time-functions.html#function_get-format).
 *
 * @description
 * Return the formatted date string in ISO 9075 format. Options may be passed to control the parts and notations of the date.
 *
 * @param {Date|Number} date - the original date
 * @param {Object} [options] - an object with options.
 * @param {Boolean} [options.date=true] - if true, the date part will be returned.
 * @param {Boolean} [options.time=true] - if true, the time part will be returned.
 * @param {Boolean} [options.extended=true] - if true, the date and time notations will use the extended version.
 * @returns {String} the formatted date string
 * @throws {RangeError} date parameter is not a number or a Date object
 * @throws {TypeError} one of `options.date` or `options.time` must be true
 *
 * @example
 * // Represent 18 September 2019 in ISO 9075 format:
 * const result = formatISO9075(new Date(2019, 8, 18, 19, 0, 52))
 * //=> '2019-09-18 19:00:52'
 *
 * @example
 * // Represent 18 September 2019 in ISO 9075, short format:
 * const result = formatISO9075(new Date(2019, 8, 18, 19, 0, 52), { extended: false })
 * //=> '20190918 190052'
 *
 * @example
 * // Represent 18 September 2019 in ISO 9075 format, date only:
 * const result = formatISO9075(new Date(2019, 8, 18, 19, 0, 52), { time: false })
 * //=> '2019-09-18'
 *
 * @example
 * // Represent 18 September 2019 in ISO 9075 format, time only:
 * const result = formatISO9075(new Date(2019, 8, 18, 19, 0, 52), { date: false })
 * //=> '19:00:52'
 */
export default function formatISO9075(
  dirtyDate,
  dirtyOptions = {
    date: true,
    time: true,
    extended: true
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

  const day = addLeadingZeros(originalDate.getDate(), 2)
  const month = addLeadingZeros(originalDate.getMonth() + 1, 2)
  const year = originalDate.getFullYear()

  const hour = addLeadingZeros(originalDate.getHours(), 2)
  const minute = addLeadingZeros(originalDate.getMinutes(), 2)
  const second = addLeadingZeros(originalDate.getSeconds(), 2)

  // Explicitly declare false because `undefined` will be resolved to `true`.
  if (dirtyOptions.date === false && dirtyOptions.time === false) {
    throw new TypeError('Either options.date or options.time must be true')
  }

  // Handle unpassed option fields.
  const showDate = dirtyOptions.date === undefined ? true : dirtyOptions.date
  const showTime = dirtyOptions.time === undefined ? true : dirtyOptions.time
  const extended =
    dirtyOptions.extended === undefined ? true : dirtyOptions.extended

  // Result variables.
  let result = ''
  let dateDelimiter = ''
  let timeDelimiter = ''

  // Set delimiter, if extended. Otherwise, keep it empty.
  if (extended) {
    dateDelimiter = '-'
    timeDelimiter = ':'
  }

  // Write result if date options is true.
  if (showDate) {
    // yyyyMMdd or yyyy-MM-dd.
    result = `${year}${dateDelimiter}${month}${dateDelimiter}${day}`
  }

  if (showTime) {
    const separator = result !== '' ? ' ' : ''

    // HHmmss or HH:mm:ss.
    // If date is present, append "T" before the time string.
    result = `${result}${separator}${hour}${timeDelimiter}${minute}${timeDelimiter}${second}`
  }

  return result
}
