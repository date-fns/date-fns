import toInteger from '../_lib/toInteger/index'
import toDate from '../toDate/index'
import addDays from '../addDays/index'
import getISODay from '../getISODay/index'
import requiredArgs from '../_lib/requiredArgs/index'

/**
 * @name setISODay
 * @category Weekday Helpers
 * @summary Set the day of the ISO week to the given date.
 *
 * @description
 * Set the day of the ISO week to the given date.
 * ISO week starts with Monday.
 * 7 is the index of Sunday, 1 is the index of Monday etc.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://date-fns.org/docs/Upgrade-Guide#common-changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} day - the day of the ISO week of the new date
 * @returns {Date} the new date with the day of the ISO week set
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Set Sunday to 1 September 2014:
 * var result = setISODay(new Date(2014, 8, 1), 7)
 * //=> Sun Sep 07 2014 00:00:00
 */
export default function setISODay(dirtyDate, dirtyDay) {
  requiredArgs(2, arguments)

  var date = toDate(dirtyDate)
  var day = toInteger(dirtyDay)
  var currentDay = getISODay(date)
  var diff = day - currentDay
  return addDays(date, diff)
}
