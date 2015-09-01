var parse = require('./parse')

/**
 * Is passed date past?
 * @param {date|string} dirtyDate
 * @returns {boolean}
 */
var isPast = function(dirtyDate) {
  return parse(dirtyDate).getTime() < new Date().getTime()
}

module.exports = isPast

