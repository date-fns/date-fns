/**
 * Returns latest of the dates.
 * @param {...date|string} dates
 * @returns {date}
 */
var max = function() {
  var dirtyDates = Array.prototype.slice.call(arguments)
  var dates = dirtyDates.map(function(dirtyDate) {
    return new Date(dirtyDate)
  })
  var latestDirtyDate = Math.max.apply(null, dates)
  return new Date(latestDirtyDate)
}

module.exports = max

