var addDays = require('./add_days');

/**
 * Substract specified number of days from passed date.
 * @param {data|string} dirtyDate
 * @param {number} amount
 * @returns {date} new date
 */
var subDays = function(dirtyDate, amount) {
  return addDays(dirtyDate, -amount);
};

module.exports = subDays;

