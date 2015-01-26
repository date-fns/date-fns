var addHours = require('./add_hours');

/**
 * Subtracts specified number of hours from passed date.
 * @param {data|string} dirtyDate
 * @param {number} amount of hours
 * @returns {date} new date
 */
var subHours = function(dirtyDate, amount) {
  return addHours(dirtyDate, -amount);
};

module.exports = subHours;