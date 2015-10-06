var startOfDay = require('./start_of_day')

/**
 * Is the given date tomorrow?
 *
 * @param {Date|String|Number} date to check
 * @returns {Boolean} the date is tomorrow
 */
var isTomorrow = function(dirtyDate) {
  var yesterday = new Date()
  yesterday.setDate(yesterday.getDate() + 1)
  return startOfDay(dirtyDate).getTime() == startOfDay(yesterday).getTime()
}

module.exports = isTomorrow

