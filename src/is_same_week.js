var startOfWeek = require('./start_of_week')

/**
 * Are the given dates in the same week?
 *
 * @param {Date|String|Number} dateLeft - the first date to check
 * @param {Date|String|Number} dateRight - the second date to check
 * @param {Number} [weekStartsAt=0] first day of week (0 - sunday)
 * @returns {Boolean} the dates are in the same week
 */
var isSameWeek = function(dirtyDateLeft, dirtyDateRight, weekStartsAt) {
  var dateLeftStartOfWeek = startOfWeek(dirtyDateLeft, weekStartsAt)
  var dateRightStartOfWeek = startOfWeek(dirtyDateRight, weekStartsAt)

  return(
    dateLeftStartOfWeek.getTime() == dateRightStartOfWeek.getTime()
  )
}

module.exports = isSameWeek

