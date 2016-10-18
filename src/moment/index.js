var setYear = require('../set_year')
var setMonth = require('../set_month')
var setDate = require('../set_date')
var setHours = require('../set_hours')
var setMinutes = require('../set_minutes')
var setSeconds = require('../set_seconds')
var setMilliseconds = require('../set_milliseconds')
var getYear = require('../get_year')
var getMonth = require('../get_month')
var getDate = require('../get_date')
var getHours = require('../get_hours')
var getMinutes = require('../get_minutes')
var getSeconds = require('../get_seconds')
var getMilliseconds = require('../get_milliseconds')
var addMilliseconds = require('../add_milliseconds')
var addSeconds = require('../add_seconds')
var addMinutes = require('../add_minutes')
var addHours = require('../add_hours')
var addDays = require('../add_days')
var addWeeks = require('../add_weeks')
var addMonths = require('../add_months')
var addYears = require('../add_years')
var addQuarters = require('../add_quarters')
var subMilliseconds = require('../sub_milliseconds')
var subSeconds = require('../sub_seconds')
var subMinutes = require('../sub_minutes')
var subHours = require('../sub_hours')
var subDays = require('../sub_days')
var subWeeks = require('../sub_weeks')
var subMonths = require('../sub_months')
var subYears = require('../sub_years')
var subQuarters = require('../sub_quarters')

const addSubMap = [
  [['ms', 'milliseconds'], [addMilliseconds, subMilliseconds]],
  [['s', 'seconds'], [addSeconds, subSeconds]],
  [['m', 'minutes'], [addMinutes, subMinutes]],
  [['h', 'hours'], [addHours, subHours]],
  [['d', 'days'], [addDays, subDays]],
  [['w', 'weeks'], [addWeeks, subWeeks]],
  [['M', 'months'], [addMonths, subMonths]],
  [['y', 'years'], [addYears, subYears]],
  [['Q', 'quarters'], [addQuarters, subQuarters]]
]

module.exports = function (date) {
  var currentDate = new Date()

  var api = {
    year: defineGetSet(getYear, setYear),
    month: defineGetSet(getMonth, setMonth),
    date: defineGetSet(getDate, setDate),
    hours: defineGetSet(getHours, setHours),
    minutes: defineGetSet(getMinutes, setMinutes),
    seconds: defineGetSet(getSeconds, setSeconds),
    milliseconds: defineGetSet(getMilliseconds, setMilliseconds),

    add: defineOptionsAddSub(0 /* take the add function */),
    subtract: defineOptionsAddSub(1 /* take the sub function */),
  }

  if (date instanceof Array) {
    api.year(date[0])
    api.month(date[1])
    api.date(date[2])
  }

  return api

  function defineGetSet (get, set) {
    return function (unit) {
      if (typeof unit === 'number') {
        currentDate = set(currentDate, unit)
      } else {
        return get(currentDate)
      }
    }
  }

  function defineOptionsAddSub (fnIndex) {
    return function (options) {
      options = options || {}
      addSubMap.forEach(function (addSub) {
        var optionAliases = addSub[0]
        var fn = addSub[1][fnIndex]
        var option = optionAliases.find(function (optionAlias) {
          return typeof options[optionAlias] == 'number'
        })
        if (option) {
          mutate(fn, options[option])
        }
      })
      return this
    }
  }

  function mutate (fn, arg) {
    currentDate = fn(currentDate, arg)
  }
}

