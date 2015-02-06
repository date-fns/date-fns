/**
 * Are passed dates has the same month (and year)?
 * @param {date|string} dirtyDateLeft
 * @param {date|string} dirtyDateRight
 * @returns {boolean}
 */
var isSameMonth = function(dirtyDateLeft, dirtyDateRight) {
  var dateLeft = new Date(dirtyDateLeft);
  var dateRight = new Date(dirtyDateRight);
  return(
    dateLeft.getFullYear() == dateRight.getFullYear() &&
    dateLeft.getMonth() == dateRight.getMonth()
  );
};

module.exports = isSameMonth;

