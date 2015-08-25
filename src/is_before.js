/**
 * Is first date is before second one?
 * @param {date|string} dirtyDateToCompare
 * @param {date|string} dirtyDate
 * @returns {boolean}
 *
 * @example is 10 July 1989 before 11 February 1987
 * var result = isBefore(new Date(1989, 6, 10), new Date(1987, 1, 11))
 * //=> false
 */
var isBefore = function(dirtyDateToCompare, dirtyDate) {
  var dateToCompare = new Date(dirtyDateToCompare)
  var date = new Date(dirtyDate)
  return dateToCompare.getTime() < date.getTime()
}

module.exports = isBefore

