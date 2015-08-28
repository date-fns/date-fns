var startOfHour = require('./start_of_hour')

/**
 * Are passed dates belongs to the same hour?
 * @param {date|string} dirtyDateLeft
 * @param {date|string} dirtyDateRight
 * @returns {boolean}
 */
var isSameHour = function(dirtyDateLeft, dirtyDateRight) {
  var dateLeftStartOfHour = startOfHour(dirtyDateLeft)
  var dateRightStartOfHour = startOfHour(dirtyDateRight)

  return(
    dateLeftStartOfHour.getTime() == dateRightStartOfHour.getTime()
  )
}

module.exports = isSameHour

