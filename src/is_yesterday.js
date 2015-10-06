var startOfDay = require('./start_of_day')

/**
 * Is the given date yesterday?
 *
 * @param {Date|String|Number} date to check
 * @returns {Boolean} the date is yesterday
 */
var isYesterday = function(dirtyDate) {
  var yesterday = new Date()
  yesterday.setDate(yesterday.getDate() - 1)
  return startOfDay(dirtyDate).getTime() == startOfDay(yesterday).getTime()
}

module.exports = isYesterday

