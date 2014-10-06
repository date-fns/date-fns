/**
 * Returns start of a month for given date. Date will be in local timezone.
 * @param {date|string} dirtyDate
 * @returns {date}
 */
var startOfMonth = function(dirtyDate) {
  var date = new Date(dirtyDate);
  date.setHours(0, 0, 0, 0);
  date.setDate(1);
  return date;
};

module.exports = startOfMonth;

