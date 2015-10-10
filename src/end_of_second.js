var parse = require('./parse')

/**
 * @category Second Helpers
 * @summary Return the end of a second for the given date.
 *
 * Return the end of a second for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} end of a second
 */
var endOfSecond = function(dirtyDate) {
  var date = parse(dirtyDate)
  date.setMilliseconds(999)
  return date
}

module.exports = endOfSecond

