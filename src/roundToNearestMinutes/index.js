import toDate from '../toDate/index.js'
import toInteger from '../_lib/toInteger/index.js'

/**
 * @name roundToNearestMinutes
 * @category Minute Helpers
 * @summary Rounds the given date to the nearest minute
 *
 * @description
 * Rounds the given date to the nearest minute
 *
 * @param {Date|String|Number} date - the date to round
 * @param {Number} [nearestTo=1] - the closest minute to round to, must be between 1 and 30 inclusive
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Date} the new date rounded to the closest minute
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `nearestTo` must be between 1 and 30
 *
 * @example
 * // Round 10 July 2014 12:12:34 to nearest minute:
 * var result = roundToNearestMinutes(new Date(2014, 6, 10, 12, 12, 34))
 * //=> Thu Jul 10 2014 12:13:00
 */
export default function roundToNearestMinutes (dirtyDate, dirtyNearestTo, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only none provided present')
  }

  var nearestTo = arguments.length === 1 ? 1 : toInteger(dirtyNearestTo)

  if (arguments.length === 2 && typeof dirtyNearestTo !== 'number' && typeof dirtyNearestTo !== 'string') {
    dirtyOptions = dirtyNearestTo
    nearestTo = 1
  }

  if (!nearestTo || nearestTo > 30 || nearestTo < 1) {
    throw new RangeError('nearestTo must be between 1 and 30')
  }

  var date = toDate(dirtyDate, dirtyOptions)
  var seconds = date.getSeconds() // relevant if nearestTo is 1, which is the default case
  var minutes = date.getMinutes() + seconds / 60
  var roundedMinutes = Math.floor(minutes / nearestTo) * nearestTo
  var remainderMinutes = minutes % nearestTo
  var addedMinutes = Math.round(remainderMinutes / nearestTo) * nearestTo

  return new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), roundedMinutes + addedMinutes)
}
