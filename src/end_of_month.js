/**
 * Returns end of a month for given date. Date will be in local timezone.
 * @param {date|string} dirtyDate
 * @returns {date}
 */
var endOfMonth = function(dirtyDate) {
  var date = new Date(dirtyDate);
  date.setHours(23, 59, 59, 999);
  date.setFullYear(date.getFullYear(), date.getMonth() + 1, 0);
  return date;
};

module.exports = endOfMonth;

