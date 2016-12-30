var parseDate = require('../parse')
var parseDuration = require('../durations/to_object')

var subYears = require('../sub_years')
var subMonths = require('../sub_months')
var subWeeks = require('../sub_weeks')
var subDays = require('../sub_days')
var subHours = require('../sub_hours')
var subMinutes = require('../sub_minutes')
var subSeconds = require('../sub_seconds')

function subDuration (dirtyDate, dirtyDuration) {
  var date = parseDate(dirtyDate)
  var duration = parseDuration(dirtyDuration)

  return [
    function (date) { return subYears(date, duration.years) },
    function (date) { return subMonths(date, duration.months) },
    function (date) { return subWeeks(date, duration.weeks) },
    function (date) { return subDays(date, duration.days) },
    function (date) { return subHours(date, duration.hours) },
    function (date) { return subMinutes(date, duration.minutes) },
    function (date) { return subSeconds(date, duration.seconds) }
  ].reduce(function (newDate, addFn) {
    return addFn(newDate)
  }, date)
}

module.exports = subDuration
