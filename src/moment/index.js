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
var format = require('../format')

const addSubMap = [
  [['ms', 'milliseconds', 'millisecond'], [addMilliseconds, subMilliseconds]],
  [['s', 'seconds', 'second'], [addSeconds, subSeconds]],
  [['m', 'minutes', 'minute'], [addMinutes, subMinutes]],
  [['h', 'hours', 'hour'], [addHours, subHours]],
  [['d', 'days', 'day'], [addDays, subDays]],
  [['w', 'weeks', 'week'], [addWeeks, subWeeks]],
  [['M', 'months', 'month'], [addMonths, subMonths]],
  [['y', 'years', 'year'], [addYears, subYears]],
  [['Q', 'quarters', 'quarter'], [addQuarters, subQuarters]]
]

module.exports = function moment (date) {
  var currentDate

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

    clone: function () { return moment(currentDate) },

    isDST: function () { return false },

    format: function (formatStr) { return format(currentDate, formatStr) }
  }

  if (date instanceof Array) {
    currentDate = new Date()
    api.year(date[0])
    api.month(date[1])
    api.date(date[2])
  } else {
    currentDate = new Date(date)
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
    return function addSub (optionsOrUnit, unitDiff) {
      if (typeof optionsOrUnit === 'number' && unitDiff === undefined) {
        addSub({ms: optionsOrUnit})
      } else if (typeof optionsOrUnit === 'number' || typeof optionsOrUnit === 'string') {
        const obj = {}
        obj[optionsOrUnit] = unitDiff
        obj[unitDiff] = optionsOrUnit
        addSub(obj)
      } else {
        const options = optionsOrUnit || {}
        addSubMap.forEach(function (addSub) {
          var optionAliases = addSub[0]
          var fn = addSub[1][fnIndex]
          var option = optionAliases.find(function (optionAlias) {
            return !!options[optionAlias]
          })
          if (option) {
            let diff = options[option]
            if (typeof diff === 'string') diff = parseInt(diff)
            mutate(fn, diff)
          }
        })
      }
      return this
    }
  }

  function mutate (fn, arg) {
    currentDate = fn(currentDate, arg)
  }
}

