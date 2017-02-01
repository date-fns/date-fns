var toDate = require('../../../to_date/index.js')
var startOfUTCISOWeek = require('../start_of_utc_iso_week/index.js')
var startOfUTCISOYear = require('../start_of_utc_iso_year/index.js')

var MILLISECONDS_IN_WEEK = 604800000

// This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376
function getUTCISOWeek (dirtyDate, options) {
  var date = toDate(dirtyDate, options)
  var diff = startOfUTCISOWeek(date, options).getTime() - startOfUTCISOYear(date, options).getTime()

  // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)
  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1
}

module.exports = getUTCISOWeek
