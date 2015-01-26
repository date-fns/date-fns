/**
 * Compares the two dates and returns -1, 0 or 1.
 * @param {date|string} dirtyDateLeft
 * @param {date|string} dirtyDateRight
 * @returns {number}
 */
var compareAsc = function(dirtyDateLeft, dirtyDateRight) {
  var dateLeft = new Date(dirtyDateLeft);
  var timeLeft = dateLeft.getTime();
  var dateRight = new Date(dirtyDateRight);
  var timeRight = dateRight.getTime();

  if (timeLeft < timeRight) {
    return -1;
  }

  if (timeLeft > timeRight) {
    return 1;
  }

  return 0;
};

module.exports = compareAsc;

