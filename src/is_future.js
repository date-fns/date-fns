/**
 * Is passed date future?
 * @param {date|string} dirtyDate
 * @returns {boolean}
 */
var isFuture = function(dirtyDate) {
  return new Date(dirtyDate).getTime() > new Date().getTime()
}

module.exports = isFuture

