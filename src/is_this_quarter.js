var isSameQuarter = require('./is_same_quarter')

/**
 * @category Quarter Helpers
 * @summary Is the given date in the same quarter as the current date?
 *
 * @description
 * Is the given date in the same quarter as the current date?
 *
 * @param {Date|String|Number} date - the date to check
 * @returns {Boolean} the date is in this quarter
 */
var isThisQuarter = function(dirtyDate) {
  return isSameQuarter(new Date(), dirtyDate)
}

module.exports = isThisQuarter

