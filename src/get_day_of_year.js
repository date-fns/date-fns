var startOfYear = require('./start_of_year');

var MILLISECONDS_IN_DAY = 86400000;

/**
 * Returns day of year of passed date.
 * @param {date|string} dirtyDate
 * @returns {number} (day of year)
 */
var getDayOfYear = function(dirtyDate) {
  var date = new Date(dirtyDate);
  var diff = date.valueOf() - startOfYear(date).valueOf();
  var dayOfYear = Math.floor(diff / MILLISECONDS_IN_DAY) + 1;
  return dayOfYear;
};

module.exports = getDayOfYear;

