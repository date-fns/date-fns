var addMonths = require('./add_months');

/**
 * Substract specified number of month from passed date.
 * @param {data|string} dirtyDate
 * @param {number} amount
 * @returns {date} new date
 */
var subMonths = function(dirtyDate, amount) {
  return addMonths(dirtyDate, -amount);
};

module.exports = subMonths;

