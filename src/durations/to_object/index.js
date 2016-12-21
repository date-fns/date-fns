var getYears = require('../get_years')
var getMonths = require('../get_months')
var getWeeks = require('../get_weeks')
var getDays = require('../get_days')
var getHours = require('../get_hours')
var getMinutes = require('../get_minutes')
var getSeconds = require('../get_seconds')

function toObject (isoDuration) {
  return Object.freeze({
    years: getYears(isoDuration),
    months: getMonths(isoDuration),
    weeks: getWeeks(isoDuration),
    days: getDays(isoDuration),
    hours: getHours(isoDuration),
    minutes: getMinutes(isoDuration),
    seconds: getSeconds(isoDuration)
  })
}

module.exports = toObject
