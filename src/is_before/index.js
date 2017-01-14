import toDate from '../to_date/index.js'

/**
 * @category Common Helpers
 * @summary Is the first date before the second one?
 *
 * @description
 * Is the first date before the second one?
 *
 * @param {Date|String|Number} date - the date that should be before the other one to return true
 * @param {Date|String|Number} dateToCompare - the date to compare with
 * @param {Options} [options] - the object with options. See [Options]{@link docs/Options}
 * @returns {Boolean} the first date is before the second date
 *
 * @example
 * // Is 10 July 1989 before 11 February 1987?
 * var result = isBefore(new Date(1989, 6, 10), new Date(1987, 1, 11))
 * //=> false
 * */
export default function isBefore (dirtyDate, dirtyDateToCompare, options) {
  var date = toDate(dirtyDate, options)
  var dateToCompare = toDate(dirtyDateToCompare, options)
  return date.getTime() < dateToCompare.getTime()
}

