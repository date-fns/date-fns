import toDate from '../to_date/index.js'
import setMonth from '../set_month/index.js'

/**
 * @category Quarter Helpers
 * @summary Set the year quarter to the given date.
 *
 * @description
 * Set the year quarter to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} quarter - the quarter of the new date
 * @param {Options} [options] - the object with options. See [Options]{@link docs/Options}
 * @returns {Date} the new date with the quarter setted
 *
 * @example
 * // Set the 2nd quarter to 2 July 2014:
 * var result = setQuarter(new Date(2014, 6, 2), 2)
 * //=> Wed Apr 02 2014 00:00:00
 * */
export default function setQuarter (dirtyDate, quarter, options) {
  var date = toDate(dirtyDate, options)
  var oldQuarter = Math.floor(date.getMonth() / 3) + 1
  var diff = quarter - oldQuarter
  return setMonth(date, date.getMonth() + diff * 3, options)
}

