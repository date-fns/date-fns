/**
 * Returns end of a day for given date. Date will be in local timezone.
 * @param {date|string} dirtyDate
 * @returns {date}
 */
var endOfDay = function(dirtyDate) {
  var date = new Date(dirtyDate);
  date.setHours(23, 59, 59, 999);
  return date;
};

module.exports = endOfDay;

