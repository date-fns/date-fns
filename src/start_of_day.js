/**
 * Returns start of the day for given date. Date will be in local
 * timezone.
 * @param {date|string} dirtyDate
 * @returns {date}
 */
var startOfDay = function(dirtyDate) {
  var date = new Date(dirtyDate);
  date.setHours(0);
  date.setMinutes(0);
  date.setSeconds(0);
  return date;
};

module.exports = startOfDay;

