var parse = require('./parse')

/**
 * Return the start of a second for the given date.
 * The result will be in the local timezone.
 * @param {Date|String|Number} dirtyDate - the original date
 * @returns {Date} start of a second
 */
var startOfSecond = function(dirtyDate) {
  var date = parse(dirtyDate)
  date.setMilliseconds(0)
  return date
}

module.exports = startOfSecond

