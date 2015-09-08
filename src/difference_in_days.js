var startOfDay = require('./start_of_day')

var MILLISECONDS_IN_MINUTE = 60000
var MILLISECONDS_IN_DAY = 86400000

/**
 * Returns number of days between dates.
 * @param {date|string} dirtyDateLeft
 * @param {date|string} dirtyDateRight
 * @returns {number}
 */
var differenceInDays = function(dirtyDateLeft, dirtyDateRight) {
  var startOfDayLeft = startOfDay(dirtyDateLeft)
  var startOfDayRight = startOfDay(dirtyDateRight)

  var timestampLeft = startOfDayLeft.getTime()
    - startOfDayLeft.getTimezoneOffset() * MILLISECONDS_IN_MINUTE
  var timestampRight = startOfDayRight.getTime()
    - startOfDayRight.getTimezoneOffset() * MILLISECONDS_IN_MINUTE

  return Math.round((timestampLeft - timestampRight) / MILLISECONDS_IN_DAY)
}

module.exports = differenceInDays

