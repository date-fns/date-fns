/**
 * Are passed dates equal?
 * @param {date|string} dirtyLeftDate
 * @param {date|string} dirtyRightDate
 * @returns {boolean}
 */
var isEqual = function(dirtyLeftDate, dirtyRightDate) {
  var dateLeft = new Date(dirtyLeftDate)
  var dateRight = new Date(dirtyRightDate)
  return dateLeft.getTime() == dateRight.getTime()
}

module.exports = isEqual

