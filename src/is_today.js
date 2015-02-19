var startOfDay = require('./start_of_day');

/**
 * Is passed date today?
 * @param {date|string} dirtyDate
 * @returns {boolean}
 */
var isToday = function(dirtyDate) {
  var date = new Date(dirtyDate);
  return startOfDay(date).getTime() == startOfDay(new Date()).getTime();
};

module.exports = isToday;

