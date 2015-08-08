/**
 * Returns end of a year for given date. Date will be in local timezone.
 * @param {date|string} dirtyDate
 * @returns {date}
 */
var endOfYear = function(dirtyDate) {
  var date = new Date(dirtyDate);
  var year = date.getFullYear();
  date.setHours(23, 59, 59, 999);
  date.setFullYear(year + 1, 0, 0);
  return date;
};

module.exports = endOfYear;

