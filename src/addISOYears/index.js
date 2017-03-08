import getISOYear from '../getISOYear/index.js'
import setISOYear from '../setISOYear/index.js'

/**
 * @name addISOYears
 * @category ISO Week-Numbering Year Helpers
 * @summary Add the specified number of ISO week-numbering years to the given date.
 *
 * @description
 * Add the specified number of ISO week-numbering years to the given date.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of ISO week-numbering years to be added
 * @param {Options} [options] - the object with options. See [Options]{@link docs/Options}
 * @returns {Date} the new date with the ISO week-numbering years added
 *
 * @example
 * // Add 5 ISO week-numbering years to 2 July 2010:
 * var result = addISOYears(new Date(2010, 6, 2), 5)
 * //=> Fri Jun 26 2015 00:00:00
 */
export default function addISOYears (dirtyDate, dirtyAmount, dirtyOptions) {
  var amount = Number(dirtyAmount)
  return setISOYear(dirtyDate, getISOYear(dirtyDate, dirtyOptions) + amount, dirtyOptions)
}
