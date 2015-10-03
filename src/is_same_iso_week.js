var isSameWeek = require('./is_same_week')

/**
 * Are the given dates in the same ISO week?
 * @param {Date|String|Number} dirtyDateLeft - the first date to check
 * @param {Date|String|Number} dirtyDateRight - the second date to check
 * @returns {Boolean} the dates are in the same ISO week
 */
var isSameISOWeek = function(dirtyDateLeft, dirtyDateRight) {
  return isSameWeek(dirtyDateLeft, dirtyDateRight, 1)
}

module.exports = isSameISOWeek

