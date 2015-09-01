var parse = require('./parse')

/**
 * Is passed date future?
 * @param {date|string} dirtyDate
 * @returns {boolean}
 */
var isFuture = function(dirtyDate) {
  return parse(dirtyDate).getTime() > new Date().getTime()
}

module.exports = isFuture

