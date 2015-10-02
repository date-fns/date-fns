var parse = require('./parse')

/**
 * Return the end of a second for the given date.
 * The result will be in the local timezone.
 * @param {Date|String|Number} dirtyDate - the original date
 * @returns {Date} end of a second
 */
var endOfSecond = function(dirtyDate) {
  var date = parse(dirtyDate)
  date.setMilliseconds(999)
  return date
}

module.exports = endOfSecond

