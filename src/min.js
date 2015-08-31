/**
 * Returns earliest of the dates.
 * @param {...date|string} dates
 * @returns {date}
 */
var min = function() {
  var dirtyDates = Array.prototype.slice.call(arguments)
  var dates = dirtyDates.map(function(dirtyDate) {
    return new Date(dirtyDate)
  })
  var earliestDirtyDate = Math.min.apply(null, dates)
  return new Date(earliestDirtyDate)
}

module.exports = min

