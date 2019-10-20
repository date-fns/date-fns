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
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to round
 * @param {Object} [options] - an object with options.
 * @param {Number} [options.nearestTo=1] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Date} the new date rounded to the closest minute
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.nearestTo` must be between 1 and 30
 *
 * @example
 * // Round 10 July 2014 12:12:34 to nearest minute:
 * const result = roundToNearestMinutes(new Date(2014, 6, 10, 12, 12, 34))
 * //=> Thu Jul 10 2014 12:13:00
 */
export default function roundToNearestMinutes(dirtyDate, options) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only none provided present')
  }

  const nearestTo =
    options && 'nearestTo' in options ? toInteger(options.nearestTo) : 1

  if (nearestTo < 1 || nearestTo > 30) {
    throw new RangeError('`options.nearestTo` must be between 1 and 30')
  }

  const date = toDate(dirtyDate)
  const seconds = date.getSeconds() // relevant if nearestTo is 1, which is the default case
  const minutes = date.getMinutes() + seconds / 60
  const roundedMinutes = Math.floor(minutes / nearestTo) * nearestTo
  const remainderMinutes = minutes % nearestTo
  const addedMinutes = Math.round(remainderMinutes / nearestTo) * nearestTo

  return new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
    date.getHours(),
    roundedMinutes + addedMinutes
  )
}
