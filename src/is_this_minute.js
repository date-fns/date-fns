var isSameMinute = require('./is_same_minute')

/**
 * @category Minute Helpers
 * @summary Is the given date in the same minute as the current date?
 *
 * @description
 * Is the given date in the same minute as the current date?
 *
 * @param {Date|String|Number} date to check
 * @returns {Boolean} the date is in this minute
 */
var isThisMinute = function(dirtyDate) {
  return isSameMinute(new Date(), dirtyDate)
}

module.exports = isThisMinute

