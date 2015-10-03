var lastDayOfWeek = require('./last_day_of_week')

/**
 * Return the last day of an ISO week for the given date.
 * The result will be in the local timezone.
 * @param {Date|String|Number} dirtyDate - the original date
 * @returns {Date} last day of an ISO week
 */
var lastDayOfISOWeek = function(dirtyDate) {
  return lastDayOfWeek(dirtyDate, 1)
}

module.exports = lastDayOfISOWeek

