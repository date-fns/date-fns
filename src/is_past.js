/**
 * Is passed date past?
 * @param {date|string} dirtyDate
 * @returns {boolean}
 */
var isPast = function(dirtyDate) {
  return new Date(dirtyDate).getTime() < new Date().getTime()
}

module.exports = isPast

