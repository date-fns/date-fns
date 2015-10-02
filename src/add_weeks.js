var addDays = require('./add_days')

/**
 * Add the specified number of week to the given date.
 * @param {Date|String|Number} dirtyDate - the date to be changed
 * @param {Number} amount of weeks to be added
 * @returns {Date} new date with the weeks added
 */
var addWeeks = function(dirtyDate, amount) {
  var days = amount * 7
  return addDays(dirtyDate, days)
}

module.exports = addWeeks

