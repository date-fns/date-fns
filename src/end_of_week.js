/**
 * Returns end of a week for given date. Date will be in local timezone.
 * @param {date|string} dirtyDate
 * @param {number} [weekStartsAt=0] first day of week (0 - sunday)
 * @returns {date}
 */
var endOfWeek = function(dirtyDate, weekStartsAt) {
  weekStartsAt = weekStartsAt || 0;

  var date = new Date(dirtyDate);
  var day = date.getDay();
  var diff = (day < weekStartsAt ? -7 : 0) + 6 - (day - weekStartsAt);

  date.setHours(23, 59, 59, 999);
  date.setDate(date.getDate() + diff);
  return date;
};

module.exports = endOfWeek;

