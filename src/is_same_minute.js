var startOfMinute = require('./start_of_minute')

/**
 * Are passed dates belongs to the same minute?
 * @param {date|string} dirtyDateLeft
 * @param {date|string} dirtyDateRight
 * @returns {boolean}
 */
var isSameMinute = function(dirtyDateLeft, dirtyDateRight) {
  var dateLeftStartOfMinute = startOfMinute(dirtyDateLeft)
  var dateRightStartOfMinute = startOfMinute(dirtyDateRight)

  return(
    dateLeftStartOfMinute.getTime() == dateRightStartOfMinute.getTime()
  )
}

module.exports = isSameMinute

