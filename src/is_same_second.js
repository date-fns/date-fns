var startOfSecond = require('./start_of_second')

/**
 * Are passed dates belongs to the same second?
 * @param {date|string} dirtyDateLeft
 * @param {date|string} dirtyDateRight
 * @returns {boolean}
 */
var isSameSecond = function(dirtyDateLeft, dirtyDateRight) {
  var dateLeftStartOfSecond = startOfSecond(dirtyDateLeft)
  var dateRightStartOfSecond = startOfSecond(dirtyDateRight)

  return(
    dateLeftStartOfSecond.getTime() == dateRightStartOfSecond.getTime()
  )
}

module.exports = isSameSecond

