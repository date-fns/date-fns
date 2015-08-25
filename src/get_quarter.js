/**
 * Returns quarter of year of passed date.
 * @param {date|string} dirtyDate
 * @returns {number} (quarter)
 *
 * @example which quarter is 2 July 2014
 * var result = getQuarter(new Date(2014, 6, 2))
 * //=> 3
 */
var getQuarter = function(dirtyDate) {
  var date = new Date(dirtyDate)
  var quarter = Math.floor(date.getMonth() / 3) + 1
  return quarter
}

module.exports = getQuarter

