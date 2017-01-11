import parse from '../parse/index.js'
import addDays from '../add_days/index.js'
import getISODay from '../get_iso_day/index.js'

/**
 * @category Weekday Helpers
 * @summary Set the day of the ISO week to the given date.
 *
 * @description
 * Set the day of the ISO week to the given date.
 * ISO week starts with Monday.
 * 7 is the index of Sunday, 1 is the index of Monday etc.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} day - the day of the ISO week of the new date
 * @returns {Date} the new date with the day of the ISO week setted
 *
 * @example
 * // Set Sunday to 1 September 2014:
 * var result = setISODay(new Date(2014, 8, 1), 7)
 * //=> Sun Sep 07 2014 00:00:00
 */
function setISODay (dirtyDate, day) {
  var date = parse(dirtyDate)
  var currentDay = getISODay(date)
  var diff = day - currentDay
  return addDays(date, diff)
}

export default setISODay
