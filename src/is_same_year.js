/**
 * Are passed dates has the same year?
 * @param {date|string} dirtyDateLeft
 * @param {date|string} dirtyDateRight
 * @returns {boolean}
 */
var isSameYear = function(dirtyDateLeft, dirtyDateRight) {
  var dateLeft = new Date(dirtyDateLeft)
  var dateRight = new Date(dirtyDateRight)
  return dateLeft.getFullYear() == dateRight.getFullYear()
}

module.exports = isSameYear

