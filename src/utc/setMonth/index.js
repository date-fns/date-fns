import toDate from '../toDate/index.js'
import getDaysInMonth from '../getDaysInMonth/index.js'

/**
 * @name setMonth
 * @category Month Helpers
 * @summary Set the month to the given date.
 *
 * @description
 * Set the month to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} month - the month of the new date
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Date} the new date with the month setted
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Set February to 1 September 2014:
 * var result = setMonth(new Date(Date.UTC(2014, 8, 1)), 1)
 * //=> Sat Feb 01 2014 00:00:00
 */
export default function setMonth (dirtyDate, dirtyMonth, dirtyOptions) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present')
  }

  var date = toDate(dirtyDate, dirtyOptions)
  var month = Number(dirtyMonth)
  var year = date.getUTCFullYear()
  var day = date.getUTCDate()

  var dateWithDesiredMonth = new Date(0)
  dateWithDesiredMonth.setUTCFullYear(year, month, 15)
  dateWithDesiredMonth.setUTCHours(0, 0, 0, 0)
  var daysInMonth = getDaysInMonth(dateWithDesiredMonth, dirtyOptions)
  // Set the last day of the new month
  // if the original date was the last day of the longer month
  date.setUTCMonth(month, Math.min(day, daysInMonth))
  return date
}
