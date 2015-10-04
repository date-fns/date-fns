var startOfDay = require('./start_of_day')

/**
 * Is the given date today?
 *
 * @param {Date|String|Number} dirtyDate - the date to check
 * @returns {Boolean} the date is today
 */
var isToday = function(dirtyDate) {
  return startOfDay(dirtyDate).getTime() == startOfDay(new Date()).getTime()
}

module.exports = isToday

