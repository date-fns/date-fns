var startOfWeek = require('./start_of_week')

/**
 * Return the start of an ISO week for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} dirtyDate - the original date
 * @returns {Date} start of an ISO week
 */
var startOfISOWeek = function(dirtyDate) {
  return startOfWeek(dirtyDate, 1)
}

module.exports = startOfISOWeek

