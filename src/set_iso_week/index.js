import toDate from '../to_date/index.js'
import getISOWeek from '../get_iso_week/index.js'

/**
 * @category ISO Week Helpers
 * @summary Set the ISO week to the given date.
 *
 * @description
 * Set the ISO week to the given date, saving the weekday number.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} isoWeek - the ISO week of the new date
 * @param {Options} [options] - the object with options. See [Options]{@link docs/Options}
 * @returns {Date} the new date with the ISO week setted
 *
 * @example
 * // Set the 53rd ISO week to 7 August 2004:
 * var result = setISOWeek(new Date(2004, 7, 7), 53)
 * //=> Sat Jan 01 2005 00:00:00
 * */
export default function setISOWeek (dirtyDate, isoWeek, options) {
  var date = toDate(dirtyDate, options)
  var diff = getISOWeek(date, options) - isoWeek
  date.setDate(date.getDate() - diff * 7)
  return date
}

