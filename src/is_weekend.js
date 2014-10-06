/**
 * Is passed date is weekend?
 * @param {date|string} dirtyDate
 * @returns {boolean}
 */
var isWeekend = function(dirtyDate) {
  var date = new Date(dirtyDate);
  var day = date.getDay();

  if (day == 0 || day == 6) {
    return true;
  } else {
    return false;
  }
};

module.exports = isWeekend;

