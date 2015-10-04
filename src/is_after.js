var parse = require('./parse')

/**
 * Is the first date after the second one?
 *
 * @param {Date|String|Number} dirtyDateToCompare - the date to compare with
 * @param {Date|String|Number} dirtyDate - the date that should be after the first one to return true
 * @returns {Boolean} the first date is after the second date
 *
 * @example is 10 July 1989 after 11 February 1987
 * var result = isAfter(new Date(1989, 6, 10), new Date(1987, 1, 11))
 * //=> true
 */
var isAfter = function(dirtyDateToCompare, dirtyDate) {
  var dateToCompare = parse(dirtyDateToCompare)
  var date = parse(dirtyDate)
  return dateToCompare.getTime() > date.getTime()
}

module.exports = isAfter

