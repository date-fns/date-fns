var parse = require('./parse')

/**
 * Is the given date in the past?
 *
 * @param {Date|String|Number} dirtyDate - the date to check
 * @returns {Boolean} the date is in the past
 */
var isPast = function(dirtyDate) {
  return parse(dirtyDate).getTime() < new Date().getTime()
}

module.exports = isPast

