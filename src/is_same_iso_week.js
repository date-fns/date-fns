var isSameWeek = require('./is_same_week')

/**
 * Are the given dates in the same ISO week?
 *
 * @param {Date|String|Number} dateLeft - the first date to check
 * @param {Date|String|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same ISO week
 */
var isSameISOWeek = function(dirtyDateLeft, dirtyDateRight) {
  return isSameWeek(dirtyDateLeft, dirtyDateRight, 1)
}

module.exports = isSameISOWeek

