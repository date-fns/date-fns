var parse = require('./parse')

/**
 * Are the given dates equal?
 *
 * @param {Date|String|Number} dirtyLeftDate - the first date to compare
 * @param {Date|String|Number} dirtyRightDate - the second date to compare
 * @returns {Boolean} the dates are equal
 */
var isEqual = function(dirtyLeftDate, dirtyRightDate) {
  var dateLeft = parse(dirtyLeftDate)
  var dateRight = parse(dirtyRightDate)
  return dateLeft.getTime() == dateRight.getTime()
}

module.exports = isEqual

