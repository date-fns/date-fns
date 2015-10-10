var addDays = require('./add_days')

/**
 * @category Week Helpers
 * @summary Add specified number of weeks to the given date.
 *
 * Add the specified number of week to the given date.
 *
 * @param {Date|String|Number} date to be changed
 * @param {Number} amount of weeks to be added
 * @returns {Date} new date with the weeks added
 */
var addWeeks = function(dirtyDate, amount) {
  var days = amount * 7
  return addDays(dirtyDate, days)
}

module.exports = addWeeks

