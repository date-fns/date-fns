/**
 * Sets year to passed date.
 * @param {date|string} dirtyDate
 * @param {number} fullYear
 * @returns {date} (new date)
 */
var setYear = function(dirtyDate, fullYear) {
  var date = new Date(dirtyDate);
  date.setFullYear(fullYear);
  return date;
};

module.exports = setYear;

