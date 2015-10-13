var isSameMonth = require('./is_same_month')

/**
 * @category Month Helpers
 * @summary Is the given date in the same month as the current date?
 *
 * @description
 * Is the given date in the same month as the current date?
 *
 * @param {Date|String|Number} date to check
 * @returns {Boolean} the date is in this month
 */
var isThisMonth = function(dirtyDate) {
  return isSameMonth(new Date(), dirtyDate)
}

module.exports = isThisMonth

