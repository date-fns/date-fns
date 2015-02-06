var startOfDay = require('./start_of_day');

/**
 * Are passed dates has the same day?
 * @param {date|string} dirtyDateLeft
 * @param {date|string} dirtyDateRight
 * @returns {boolean}
 */
var isSameDay = function(dirtyDateLeft, dirtyDateRight) {
  var dateLeftStartOfDay = startOfDay(dirtyDateLeft);
  var dateRightStartOfDay = startOfDay(dirtyDateRight);

  return(
    dateLeftStartOfDay.getTime() == dateRightStartOfDay.getTime()
  );
}

module.exports = isSameDay;

