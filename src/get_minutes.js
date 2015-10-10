var parse = require('./parse')

/**
 * @category Minute Helpers
 * @summary Get the minutes.
 *
 * Get the minutes of the given date.
 *
 * @param {Date|String|Number} date - the given date
 * @returns {Number} minutes
 */
var getMinutes = function(dirtyDate) {
  var date = parse(dirtyDate)
  var minutes = date.getMinutes()
  return minutes
}

module.exports = getMinutes

