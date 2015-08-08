/**
 * Returns end of a minutes for given date. Date will be in local timezone.
 * @param {date|string} dirtyDate
 * @returns {date}
 */
var endOfMinute = function(dirtyDate) {
  var date = new Date(dirtyDate);
  date.setSeconds(59, 999);
  return date;
};

module.exports = endOfMinute;

