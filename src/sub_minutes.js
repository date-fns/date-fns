var addMinutes = require('./add_minutes');

/**
 * Substract specified number of munutes from passed date.
 * @param {data|string} dirtyDate
 * @param {number} amount of minutes
 * @returns {date} new date
 */
var subMinutes = function(dirtyDate, amount) {
  return addMinutes(dirtyDate, -amount);
};

module.exports = subMinutes;

