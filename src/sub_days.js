/**
 * Substract specified number of days from passed date.
 * @param {data|string} dirtyDate
 * @param {number} amount
 * @returns {date} new date
 */
var subDays = function(dirtyDate, amount) {
  var date = new Date(dirtyDate);
  date.setDate(date.getDate() - amount);
  return date;
};

module.exports = subDays;

