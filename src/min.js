var parse = require('./parse')

/**
 * Return the earliest of the given dates.
 * @param {...Date|String|Number} list of dates
 * @returns {Date} earliest of the dates
 */
var min = function() {
  var dirtyDates = Array.prototype.slice.call(arguments)
  var dates = dirtyDates.map(function(dirtyDate) {
    return parse(dirtyDate)
  })
  var earliestDirtyDate = Math.min.apply(null, dates)
  return new Date(earliestDirtyDate)
}

module.exports = min

