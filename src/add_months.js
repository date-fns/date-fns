/**
 * Adds specified number of months to passed date.
 * @param {data|string} dirtyDate
 * @param {number} amount
 * @returns {date} new date
 */
var addMonths = function(dirtyDate, amount) {
  var date = new Date(dirtyDate);
  date.setMonth(date.getMonth() + amount);
  return date;
};

module.exports = addMonths;

