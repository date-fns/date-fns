var parse = require('./parse')

/**
 * Are the given dates in the same month?
 *
 * @param {Date|String|Number} dateLeft - the first date to check
 * @param {Date|String|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same month
 */
var isSameMonth = function(dirtyDateLeft, dirtyDateRight) {
  var dateLeft = parse(dirtyDateLeft)
  var dateRight = parse(dirtyDateRight)
  return(
    dateLeft.getFullYear() == dateRight.getFullYear()
    && dateLeft.getMonth() == dateRight.getMonth()
  )
}

module.exports = isSameMonth

