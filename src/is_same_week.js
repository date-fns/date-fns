var startOfWeek = require('./start_of_week');

/**
 * Is passed dates belongs to the same week?
 * @param {date|string} dirtyDateLeft
 * @param {date|string} dirtyDateRight
 * @param {number} [weekStartsAt=0] first day of week (0 - sunday)
 * @returns {boolean}
 */
var isSameWeek = function(dirtyDateLeft, dirtyDateRight, weekStartsAt) {
  var dateLeftStartOfWeek = startOfWeek(dirtyDateLeft, weekStartsAt);
  var dateRightStartOfWeek = startOfWeek(dirtyDateRight, weekStartsAt);

  return(
    dateLeftStartOfWeek.getTime() == dateRightStartOfWeek.getTime()
  );
};

module.exports = isSameWeek;

