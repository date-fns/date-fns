var parse = require('./parse')

/**
 * @category Day Helpers
 * @summary Return the end of a day for the given date.
 *
 * Return the end of a day for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} end of a day
 */
var endOfDay = function(dirtyDate) {
  var date = parse(dirtyDate)
  date.setHours(23, 59, 59, 999)
  return date
}

module.exports = endOfDay

