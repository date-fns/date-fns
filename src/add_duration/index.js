var parseDate = require('../parse')
var parseDuration = require('../durations/to_object')

var addYears = require('../add_years')
var addMonths = require('../add_months')
var addWeeks = require('../add_weeks')
var addDays = require('../add_days')
var addHours = require('../add_hours')
var addMinutes = require('../add_minutes')
var addSeconds = require('../add_seconds')

/**
 * @category Duration Helpers
 * @summary Add the specified ISO duration to a given date.
 *
 * @description
 * Add the specified ISO duration to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {String} ISO Duration- the duration to be added
 * @returns {Date} the new date with the duration added
 *
 * @example
 * // Add P10D (10 Days) to 1 September 2014:
 * var result = addDuration(new Date(2014, 8, 1), 'P10D')
 * //=> Thu Sep 11 2014 00:00:00
 */
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
