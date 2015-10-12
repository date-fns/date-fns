var isSameISOYear = require('./is_same_iso_year')

/**
 * @category ISO Week-Numbering Year Helpers
 * @summary Is the given date in the same ISO week-numbering year as the current date?
 *
 * @description
 * Is the given date in the same ISO week-numbering year as the current date?
 *
 * @param {Date|String|Number} date to check
 * @returns {Boolean} the date is in this ISO week-numbering year
 */
var isThisISOYear = function(dirtyDate) {
  return isSameISOYear(new Date(), dirtyDate)
}

module.exports = isThisISOYear

