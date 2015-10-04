var startOfQuarter = require('./start_of_quarter')

/**
 * Are the given dates in the same year quarter?
 *
 * @param {Date|String|Number} dirtyDateLeft - the first date to check
 * @param {Date|String|Number} dirtyDateRight - the second date to check
 * @returns {Boolean} the dates are in the same quarter
 */
var isSameQuarter = function(dirtyDateLeft, dirtyDateRight) {
  var dateLeftStartOfQuarter = startOfQuarter(dirtyDateLeft)
  var dateRightStartOfQuarter = startOfQuarter(dirtyDateRight)

  return(
    dateLeftStartOfQuarter.getTime() == dateRightStartOfQuarter.getTime()
  )
}

module.exports = isSameQuarter

