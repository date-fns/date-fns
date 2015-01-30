var startOfYear = require('./start_of_year');

/**
 * Returns day of year of passed date.
 * @param {date|string} dirtyDate
 * @returns {number} (day of year)
 */
var getDayOfYear = function(dirtyDate) {
  var date = new Date(dirtyDate);
  var diff = date.valueOf() - startOfYear(date).valueOf();
  var dayOfYear = Math.floor(diff / 86400000) + 1;
  return dayOfYear;
};

module.exports = getDayOfYear;

