var startOfDay = require('./start_of_day')

/**
 * @category Day Helpers
 * @summary Is the given date tomorrow?
 *
 * @description
 * Is the given date tomorrow?
 *
 * @param {Date|String|Number} date to check
 * @returns {Boolean} the date is tomorrow
 */
var isTomorrow = function(dirtyDate) {
  var tomorrow = new Date()
  tomorrow.setDate(tomorrow.getDate() + 1)
  return startOfDay(dirtyDate).getTime() == startOfDay(tomorrow).getTime()
}

module.exports = isTomorrow

