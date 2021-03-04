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
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} day - the day of the ISO week of the new date
 * @returns {Date} the new date with the day of the ISO week set
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Set Sunday to 1 September 2014:
 * const result = setISODay(new Date(2014, 8, 1), 7)
 * //=> Sun Sep 07 2014 00:00:00
 */
export default function setISODay(dirtyDate: Date | number, dirtyDay: number): Date {
  requiredArgs(2, arguments)

  const date = toDate(dirtyDate)
  const day = toInteger(dirtyDay)
  const currentDay = getISODay(date)
  const diff = day - currentDay
  return addDays(date, diff)
}
