var startOfDay = require('./start_of_day')

/**
 * Are the given dates in the same day?
 *
 * @param {Date|String|Number} dirtyDateLeft - the first date to check
 * @param {Date|String|Number} dirtyDateRight - the second date to check
 * @returns {Boolean} the dates are in the same day
 */
var isSameDay = function(dirtyDateLeft, dirtyDateRight) {
  var dateLeftStartOfDay = startOfDay(dirtyDateLeft)
  var dateRightStartOfDay = startOfDay(dirtyDateRight)

  return(
    dateLeftStartOfDay.getTime() == dateRightStartOfDay.getTime()
  )
}

module.exports = isSameDay

