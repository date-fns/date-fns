var parse = require('./parse')

/**
 * Are passed dates equal?
 * @param {date|string} dirtyLeftDate
 * @param {date|string} dirtyRightDate
 * @returns {boolean}
 */
var isEqual = function(dirtyLeftDate, dirtyRightDate) {
  var dateLeft = parse(dirtyLeftDate)
  var dateRight = parse(dirtyRightDate)
  return dateLeft.getTime() == dateRight.getTime()
}

module.exports = isEqual

