var parse = require('./parse')

/**
 * Get the year quarter of the given date.
 *
 * @param {Date|String|Number} dirtyDate - the given date
 * @returns {Number} quarter
 *
 * @example which quarter is 2 July 2014
 * var result = getQuarter(new Date(2014, 6, 2))
 * //=> 3
 */
var getQuarter = function(dirtyDate) {
  var date = parse(dirtyDate)
  var quarter = Math.floor(date.getMonth() / 3) + 1
  return quarter
}

module.exports = getQuarter

