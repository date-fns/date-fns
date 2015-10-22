var isSameISOWeek = require('./is_same_iso_week')

/**
 * @category ISO Week Helpers
 * @summary Is the given date in the same ISO week as the current date?
 *
 * @description
 * Is the given date in the same ISO week as the current date?
 *
 * @param {Date|String|Number} date - the date to check
 * @returns {Boolean} the date is in this ISO week
 */
var isThisISOWeek = function(dirtyDate) {
  return isSameISOWeek(new Date(), dirtyDate)
}

module.exports = isThisISOWeek

