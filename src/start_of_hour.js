var parse = require('./parse')

/**
 * Return the start of an hour for the given date.
 * The result will be in the local timezone.
 * @param {Date|String|Number} dirtyDate - the original date
 * @returns {Date} start of an hour
 */
var startOfHour = function(dirtyDate) {
  var date = parse(dirtyDate)
  date.setMinutes(0, 0, 0)
  return date
}

module.exports = startOfHour

