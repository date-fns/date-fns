var parse = require('./parse')

/**
 * Are the given dates in the same year?
 *
 * @param {Date|String|Number} dirtyDateLeft - the first date to check
 * @param {Date|String|Number} dirtyDateRight - the second date to check
 * @returns {Boolean} the dates are in the same year
 */
var isSameYear = function(dirtyDateLeft, dirtyDateRight) {
  var dateLeft = parse(dirtyDateLeft)
  var dateRight = parse(dirtyDateRight)
  return dateLeft.getFullYear() == dateRight.getFullYear()
}

module.exports = isSameYear

