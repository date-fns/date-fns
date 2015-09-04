var startOfISOYear = require('./start_of_iso_year')
var addWeeks = require('./add_weeks')

var MILLISECONDS_IN_WEEK = 604800000

/**
 * Returns number of ISO weeks of ISO week-numbering year of passed date.
 * @param {date|string} dirtyDate
 * @returns {number} (days)
 */
var getISOWeeksInYear = function(dirtyDate) {
  var thisYear = startOfISOYear(dirtyDate)
  var nextYear = startOfISOYear(addWeeks(thisYear, 60))
  var diff = nextYear.valueOf() - thisYear.valueOf()
  return Math.round(diff / MILLISECONDS_IN_WEEK)
}

module.exports = getISOWeeksInYear

