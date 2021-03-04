import toInteger from '../_lib/toInteger/index'
import toDate from '../toDate/index'
import getISOWeek from '../getISOWeek/index'
import requiredArgs from '../_lib/requiredArgs/index'

/**
 * @name setISOWeek
 * @category ISO Week Helpers
 * @summary Set the ISO week to the given date.
 *
 * @description
 * Set the ISO week to the given date, saving the weekday number.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} isoWeek - the ISO week of the new date
 * @returns {Date} the new date with the ISO week set
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Set the 53rd ISO week to 7 August 2004:
 * const result = setISOWeek(new Date(2004, 7, 7), 53)
 * //=> Sat Jan 01 2005 00:00:00
 */
export default function setISOWeek(dirtyDate: Date | number, dirtyISOWeek: number): Date {
  requiredArgs(2, arguments)

  const date = toDate(dirtyDate)
  const isoWeek = toInteger(dirtyISOWeek)
  const diff = getISOWeek(date) - isoWeek
  date.setDate(date.getDate() - diff * 7)
  return date
}
