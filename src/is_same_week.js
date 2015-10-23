var startOfWeek = require('./start_of_week')

/**
 * @category Week Helpers
 * @summary Are the given dates in the same week?
 *
 * @description
 * Are the given dates in the same week?
 *
 * @param {Date|String|Number} dateLeft - the first date to check
 * @param {Date|String|Number} dateRight - the second date to check
 * @param {Number} [weekStartsAt=0] first day of week (0 - sunday)
 * @returns {Boolean} the dates are in the same week
 *
 * @example
 * // Are 31 August 2014 and 4 September 2014 in the same week?
 * var result = isSameWeek(
 *   new Date(2014, 7, 31),
 *   new Date(2014, 8, 4)
 * )
 * //=> true
 *
 * @example
 * // If week starts with Monday,
 * // are 31 August 2014 and 4 September 2014 in the same week?
 * var result = isSameWeek(
 *   new Date(2014, 7, 31),
 *   new Date(2014, 8, 4),
 *   1
 * )
 * //=> false
 */
var isSameWeek = function(dirtyDateLeft, dirtyDateRight, weekStartsAt) {
  var dateLeftStartOfWeek = startOfWeek(dirtyDateLeft, weekStartsAt)
  var dateRightStartOfWeek = startOfWeek(dirtyDateRight, weekStartsAt)

  return(
    dateLeftStartOfWeek.getTime() == dateRightStartOfWeek.getTime()
  )
}

module.exports = isSameWeek

