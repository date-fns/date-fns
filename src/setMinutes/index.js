import toInteger from '../_lib/toInteger/index.js'
import toDate from '../toDate/index.js'

/**
 * @name setMinutes
 * @category Minute Helpers
 * @summary Set the minutes to the given date.
 *
 * @description
 * Set the minutes to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} minutes - the minutes of the new date
 * @returns {Date} the new date with the minutes set
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Set 45 minutes to 1 September 2014 11:30:40:
 * var result = setMinutes(new Date(2014, 8, 1, 11, 30, 40), 45)
 * //=> Mon Sep 01 2014 11:45:40
 */
export default function setMinutes(dirtyDate, dirtyMinutes) {
  if (arguments.length < 2) {
    throw new TypeError(
      '2 arguments required, but only ' + arguments.length + ' present'
    )
  }

  var date = toDate(dirtyDate)
  var minutes = toInteger(dirtyMinutes)
  date.setMinutes(minutes)
  return date
}
