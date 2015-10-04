var endOfWeek = require('./end_of_week')

/**
 * Return the end of an ISO week for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} end of an ISO week
 */
var endOfISOWeek = function(dirtyDate) {
  return endOfWeek(dirtyDate, 1)
}

module.exports = endOfISOWeek

