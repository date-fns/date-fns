/**
 * Adds specified number of years to passed date.
 * @param {data|string} dirtyDate
 * @param {number} amount
 * @returns {date} new date
 */
var addYears = function(dirtyDate, amount) {
  var date = new Date(dirtyDate);
  date.setFullYear(date.getFullYear() + amount);
  return date;
};

module.exports = addYears;

