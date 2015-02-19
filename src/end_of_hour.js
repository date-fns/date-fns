/**
 * Returns end of an hour for given date. Date will be in local timezone.
 * @param {date|string} dirtyDate
 * @returns {date}
 */
var endOfHour = function(dirtyDate) {
  var date = new Date(dirtyDate);
  date.setMinutes(59, 59, 999);
  return date;
};

module.exports = endOfHour;

