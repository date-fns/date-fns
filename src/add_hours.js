/**
 * Adds specified number of hours to passed date.
 * @param {data|string} dirtyDate
 * @param {number} amount of hours
 * @returns {date} new date
 */
var addHours = function(dirtyDate, amount) {
  var date = new Date(dirtyDate);
  date.setHours(date.getHours() + amount);
  return date;
};

module.exports = addHours;

