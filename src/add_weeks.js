var addDays = require('./add_days')

/**
 * Adds specified number of week to passed date.
 * @param {data|string} dirtyDate
 * @param {number} amount
 * @returns {date} new date
 */
var addWeeks = function(dirtyDate, amount) {
  var days = amount * 7
  return addDays(dirtyDate, days)
}

module.exports = addWeeks

