var startOfHour = require('./start_of_hour')

/**
 * Are the given dates in the same hour?
 * @param {Date|String|Number} dirtyDateLeft - the first date to check
 * @param {Date|String|Number} dirtyDateRight - the second date to check
 * @returns {Boolean} the dates are in the same hour
 */
var isSameHour = function(dirtyDateLeft, dirtyDateRight) {
  var dateLeftStartOfHour = startOfHour(dirtyDateLeft)
  var dateRightStartOfHour = startOfHour(dirtyDateRight)

  return(
    dateLeftStartOfHour.getTime() == dateRightStartOfHour.getTime()
  )
}

module.exports = isSameHour

