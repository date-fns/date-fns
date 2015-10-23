var startOfWeek = require('./start_of_week')

/**
 * @category ISO Week Helpers
 * @summary Return the start of an ISO week for the given date.
 *
 * @description
 * Return the start of an ISO week for the given date.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} start of an ISO week
 */
var startOfISOWeek = function(dirtyDate) {
  return startOfWeek(dirtyDate, 1)
}

module.exports = startOfISOWeek

