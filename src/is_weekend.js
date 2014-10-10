/**
 * Is passed date is weekend?
 * @param {date|string} dirtyDate
 * @returns {boolean}
 */
var isWeekend = function(dirtyDate) {
  var date = new Date(dirtyDate);
  var day = date.getDay();
  return day == 0 || day == 6;
};

module.exports = isWeekend;

