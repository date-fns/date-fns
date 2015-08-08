/**
 * Returns start of a second for given date. Date will be in local timezone.
 * @param {date|string} dirtyDate
 * @returns {date}
 */
var startOfSecond = function(dirtyDate) {
  var date = new Date(dirtyDate);
  date.setMilliseconds(0);
  return date;
};

module.exports = startOfSecond;

