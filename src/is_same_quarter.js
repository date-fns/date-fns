var startOfQuarter = require('./start_of_quarter')

/**
 * Are passed dates belongs to the same quarter?
 * @param {date|string} dirtyDateLeft
 * @param {date|string} dirtyDateRight
 * @returns {boolean}
 */
var isSameQuarter = function(dirtyDateLeft, dirtyDateRight) {
  var dateLeftStartOfQuarter = startOfQuarter(dirtyDateLeft)
  var dateRightStartOfQuarter = startOfQuarter(dirtyDateRight)

  return(
    dateLeftStartOfQuarter.getTime() == dateRightStartOfQuarter.getTime()
  )
}

module.exports = isSameQuarter

