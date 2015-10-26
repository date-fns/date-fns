var parse = require('./parse')

/**
 * @category Common Helpers
 * @summary Return the earliest of the given dates.
 *
 * @description
 * Return the earliest of the given dates.
 *
 * @param {...(Date|String|Number)} dates - the dates to compare
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

