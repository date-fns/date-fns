var addMinutes = require('./add_minutes');

/**
 * Subtracts specified number of minutes from passed date.
 * @param {data|string} dirtyDate
 * @param {number} amount of minutes
 * @returns {date} new date
 */
var subMinutes = function(dirtyDate, amount) {
  return addMinutes(dirtyDate, -amount);
};

module.exports = subMinutes;

