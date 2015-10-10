var parse = require('./parse')

/**
 * @category Second Helpers
 * @summary Get the seconds.
 *
 * Get the seconds of the given date.
 *
 * @param {Date|String|Number} date - the given date
 * @returns {Number} seconds
 */
var getSeconds = function(dirtyDate) {
  var date = parse(dirtyDate)
  var seconds = date.getSeconds()
  return seconds
}

module.exports = getSeconds

