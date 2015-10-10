var parse = require('./parse')

/**
 * @category Millisecond Helpers
 * @summary Get the milliseconds.
 *
 * Get the milliseconds of the given date.
 *
 * @param {Date|String|Number} date - the given date
 * @returns {Number} milliseconds
 */
var getMilliseconds = function(dirtyDate) {
  var date = parse(dirtyDate)
  var milliseconds = date.getMilliseconds()
  return milliseconds
}

module.exports = getMilliseconds

