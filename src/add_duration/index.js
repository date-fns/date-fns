var parseDate = require('../parse')
var parseDuration = require('../durations/to_object')

var addYears = require('../add_years')
var addMonths = require('../add_months')
var addWeeks = require('../add_weeks')
var addDays = require('../add_days')
var addHours = require('../add_hours')
var addMinutes = require('../add_minutes')
var addSeconds = require('../add_seconds')

function addDuration (dirtyDate, dirtyDuration) {
  var date = parseDate(dirtyDate)
  var duration = parseDuration(dirtyDuration)

  return [
    function (date) { return addYears(date, duration.years) },
    function (date) { return addMonths(date, duration.months) },
    function (date) { return addWeeks(date, duration.weeks) },
    function (date) { return addDays(date, duration.days) },
    function (date) { return addHours(date, duration.hours) },
    function (date) { return addMinutes(date, duration.minutes) },
    function (date) { return addSeconds(date, duration.seconds) }
  ].reduce(function (newDate, addFn) {
    return addFn(newDate)
  }, date)
}

module.exports = addDuration
