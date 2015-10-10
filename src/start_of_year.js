var parse = require('./parse')

/**
 * @category Year Helpers
 * @summary Return the start of a year for the given date.
 *
 * @description
 * Return the start of a year for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} start of a year
 */
var startOfYear = function(dirtyDate) {
  var cleanDate = parse(dirtyDate)
  var date = new Date(cleanDate.getFullYear(), 0, 1, 0, 0, 0, 0)
  return date
}

module.exports = startOfYear

