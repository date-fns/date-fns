var isSameYear = require('./is_same_year')

/**
 * @category Year Helpers
 * @summary Is the given date in the same year as the current date?
 *
 * @description
 * Is the given date in the same year as the current date?
 *
 * @param {Date|String|Number} date to check
 * @returns {Boolean} the date is in this year
 */
var isThisYear = function(dirtyDate) {
  return isSameYear(new Date(), dirtyDate)
}

module.exports = isThisYear

