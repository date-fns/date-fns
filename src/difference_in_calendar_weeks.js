var startOfWeek = require('./start_of_week')

var MILLISECONDS_IN_MINUTE = 60000
var MILLISECONDS_IN_WEEK = 604800000

/**
 * @category Week Helpers
 * @summary Get the number of calendar weeks between the given dates.
 *
 * @description
 * Get the number of calendar weeks between the given dates.
 *
 * @param {Date|String|Number} dateLeft - the later date
 * @param {Date|String|Number} dateRight - the earlier date
 * @param {Number} [weekStartsAt=0] first day of week (0 - sunday)
 * @returns {Number} number of calendar weeks
 */
var differenceInCalendarWeeks = function(dirtyDateLeft, dirtyDateRight, weekStartsAt) {
  weekStartsAt = weekStartsAt || 0

  var startOfWeekLeft = startOfWeek(dirtyDateLeft, weekStartsAt)
  var startOfWeekRight = startOfWeek(dirtyDateRight, weekStartsAt)

  var timestampLeft = startOfWeekLeft.getTime()
    - startOfWeekLeft.getTimezoneOffset() * MILLISECONDS_IN_MINUTE
  var timestampRight = startOfWeekRight.getTime()
    - startOfWeekRight.getTimezoneOffset() * MILLISECONDS_IN_MINUTE

  // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)
  return Math.round((timestampLeft - timestampRight) / MILLISECONDS_IN_WEEK)
}

module.exports = differenceInCalendarWeeks

