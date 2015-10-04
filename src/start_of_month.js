var parse = require('./parse')

/**
 * Return the start of a month for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} dirtyDate - the original date
 * @returns {Date} start of a month
 */
var startOfMonth = function(dirtyDate) {
  var date = parse(dirtyDate)
  date.setDate(1)
  date.setHours(0, 0, 0, 0)
  return date
}

module.exports = startOfMonth

