var parse = require('../parse/index.js')

/**
 * @category Common Helpers
 * @summary Is the first date before the second one?
 *
 * @description
 * Is the first date before the second one?
 *
 * @param {Date|String|Number} dateToCompare - the date to compare with
 * @param {Date|String|Number} date - the date that should be before the first one to return true
 * @param {Object} [options] - the object with options. See [options]{@link docs/types/options}
 * @returns {Boolean} the first date is before the second date
 *
 * @example
 * // Is 10 July 1989 before 11 February 1987?
 * var result = isBefore(new Date(1989, 6, 10), new Date(1987, 1, 11))
 * //=> false
 */
function isBefore (dirtyDateToCompare, dirtyDate, options) {
  var dateToCompare = parse(dirtyDateToCompare, options)
  var date = parse(dirtyDate, options)
  return dateToCompare.getTime() < date.getTime()
}

module.exports = isBefore
