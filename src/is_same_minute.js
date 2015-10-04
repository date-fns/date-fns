var startOfMinute = require('./start_of_minute')

/**
 * Are the given dates in the same minute?
 *
 * @param {Date|String|Number} dateLeft - the first date to check
 * @param {Date|String|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same minute
 */
var isSameMinute = function(dirtyDateLeft, dirtyDateRight) {
  var dateLeftStartOfMinute = startOfMinute(dirtyDateLeft)
  var dateRightStartOfMinute = startOfMinute(dirtyDateRight)

  return(
    dateLeftStartOfMinute.getTime() == dateRightStartOfMinute.getTime()
  )
}

module.exports = isSameMinute

