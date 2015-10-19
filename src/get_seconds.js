var parse = require('./parse')

/**
 * @category Second Helpers
 * @summary Get the seconds.
 *
 * @description
 * Get the seconds of the given date.
 *
 * @param {Date|String|Number} date - the given date
 * @returns {Number} seconds
 *
 * @example
 * // Get the seconds of 29 February 2012 11:45:05.123:
 * var result = getSeconds(new Date(2012, 1, 29, 11, 45, 5, 123))
 * //=> 5
 */
var getSeconds = function(dirtyDate) {
  var date = parse(dirtyDate)
  var seconds = date.getSeconds()
  return seconds
}

module.exports = getSeconds

