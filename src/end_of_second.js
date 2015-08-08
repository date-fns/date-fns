/**
 * Returns end of a second for given date. Date will be in local timezone.
 * @param {date|string} dirtyDate
 * @returns {date}
 */
var endOfSecond = function(dirtyDate) {
  var date = new Date(dirtyDate);
  date.setMilliseconds(999);
  return date;
};

module.exports = endOfSecond;

