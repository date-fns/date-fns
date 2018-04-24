var parseDate = require('../parse')
var parseDuration = require('../durations/to_object')

var subYears = require('../sub_years')
var subMonths = require('../sub_months')
var subWeeks = require('../sub_weeks')
var subDays = require('../sub_days')
var subHours = require('../sub_hours')
var subMinutes = require('../sub_minutes')
var subSeconds = require('../sub_seconds')

/**
 * @category Duration Helpers
 * @summary Subtract the specified ISO duration from a given date.
 *
 * @description
 * Subtract the specified ISO duration from the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {String} ISO Duration- the duration to be subtracted
 * @returns {Date} the new date with the duration subtracted
 *
 * @example
 * // Subtract P10D (10 Days) from 1 September 2014:
 * var result = subDuration(new Date(2014, 8, 1), 'P10D')
 * //=> Fri Aug 22 2014 00:00:00
 */
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
