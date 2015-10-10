var parse = require('./parse')

/**
 * @category Year Helpers
 * @summary Are the given dates in the same year?
 *
 * Are the given dates in the same year?
 *
 * @param {Date|String|Number} dateLeft - the first date to check
 * @param {Date|String|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same year
 */
var isSameYear = function(dirtyDateLeft, dirtyDateRight) {
  var dateLeft = parse(dirtyDateLeft)
  var dateRight = parse(dirtyDateRight)
  return dateLeft.getFullYear() == dateRight.getFullYear()
}

module.exports = isSameYear

