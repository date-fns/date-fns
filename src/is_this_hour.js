var isSameHour = require('./is_same_hour')

/**
 * @category Hour Helpers
 * @summary Is the given date in the same hour as the current date?
 *
 * @description
 * Is the given date in the same hour as the current date?
 *
 * @param {Date|String|Number} date - the date to check
 * @returns {Boolean} the date is in this hour
 */
var isThisHour = function(dirtyDate) {
  return isSameHour(new Date(), dirtyDate)
}

module.exports = isThisHour

