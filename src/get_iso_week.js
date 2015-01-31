var startOfISOYear = require('./start_of_iso_year');

/**
 * Returns ISO week of given date.
 * @param {date|string} dirtyDate
 * @returns {number} (ISO week)
 */
var getISOWeek = function(dirtyDate) {
  var date = new Date(dirtyDate);
  var diff = date.getTime() - startOfISOYear(date).getTime();
  return Math.floor(diff / 604800000) + 1;
};

module.exports = getISOWeek;

