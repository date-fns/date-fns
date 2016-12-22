
var getYears = require('../get_years')
var getMonths = require('../get_months')
var getDays = require('../get_days')
var getWeeks = require('../get_weeks')

var FORMATTERS = {
  'Y': function(duration) {
    return getYears(duration) + ''
  },
  'YY': function(duration) {
    return addLeadingZeros(getYears(duration), 2)
  },
  'M': function(duration) {
    return getMonths(duration) + ''
  },
  'MM': function(duration) {
    return addLeadingZeros(getMonths(duration), 2)
  },
  'W': function(duration) {
    return getWeeks(duration) + ''
  },
  'WW': function(duration) {
    return addLeadingZeros(getWeeks(duration), 2)
  },
  'D': function(duration) {
    return getDays(duration) + ''
  },
  'DD': function(duration) {
    return addLeadingZeros(getDays(duration), 2)
  }
}

function format(duration, formatStr) {
  return FORMATTERS[formatStr](duration)
}

function addLeadingZeros (number, targetLength) {
  var output = Math.abs(number).toString()
  while (output.length < targetLength) {
    output = '0' + output
  }
  return output
}

module.exports = format
