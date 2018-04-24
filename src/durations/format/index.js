var getYears = require('../get_years')
var getMonths = require('../get_months')
var getDays = require('../get_days')
var getWeeks = require('../get_weeks')
var getHours = require('../get_hours')
var getMinutes = require('../get_minutes')
var getSeconds = require('../get_seconds')

/**
 * @category Duration Helpers
 * @summary Format the duration.
 *
 * @description
 * Return the duration string in the given format.
 *
 * Accepted tokens:
 * | Unit                    | Token | Result examples                  |
 * |-------------------------|-------|----------------------------------|
 * | Years                   | Y     | 1, 2, ..., 12                    |
 * |                         | YY    | 01, 02, ..., 12                  |
 * | Months                  | M     | 1, 2, ..., 12                    |
 * |                         | MM    | 01, 02, ..., 12                  |
 * | Weeks                   | W     | 1, 2, ..., 12                    |
 * |                         | WW    | 01, 02, ..., 12                  |
 * | Days                    | D     | 1, 2, ..., 12                    |
 * |                         | DD    | 01, 02, ..., 12                  |
 * | Hours                   | H     | 1, 2, ..., 12                    |
 * |                         | HH    | 01, 02, ..., 12                  |
 * | Minutes                 | m     | 1, 2, ..., 12                    |
 * |                         | mm    | 01, 02, ..., 12                  |
 * | Seconds                 | s     | 1, 2, ..., 12                    |
 * |                         | ss    | 01, 02, ..., 12                  |
 */

function format (duration, formatStr) {
  var array = formatStr.match(buildTokenRegex())
  return array.reduce(function (formattedDuration, token) {
    if (FORMATTERS[token]) {
      var replacedToken = FORMATTERS[token](duration)
      return formattedDuration.replace(token, replacedToken)
    }
    return formattedDuration.replace(/\[|]/, '')
  }, formatStr)
}

var FORMATTERS = {
  'Y': function (duration) {
    return getYears(duration) + ''
  },
  'YY': function (duration) {
    return addLeadingZeros(getYears(duration), 2)
  },
  'M': function (duration) {
    return getMonths(duration) + ''
  },
  'MM': function (duration) {
    return addLeadingZeros(getMonths(duration), 2)
  },
  'W': function (duration) {
    return getWeeks(duration) + ''
  },
  'WW': function (duration) {
    return addLeadingZeros(getWeeks(duration), 2)
  },
  'D': function (duration) {
    return getDays(duration) + ''
  },
  'DD': function (duration) {
    return addLeadingZeros(getDays(duration), 2)
  },
  'H': function (duration) {
    return getHours(duration) + ''
  },
  'HH': function (duration) {
    return addLeadingZeros(getHours(duration), 2)
  },
  'm': function (duration) {
    return getMinutes(duration) + ''
  },
  'mm': function (duration) {
    return addLeadingZeros(getMinutes(duration), 2)
  },
  's': function (duration) {
    return getSeconds(duration) + ''
  },
  'ss': function (duration) {
    return addLeadingZeros(getSeconds(duration), 2)
  }
}

// TODO: combine with functions from date
function buildTokenRegex () {
  var formattingTokens = Object
    .keys(FORMATTERS)
    .sort()
    .reverse()

  return new RegExp(
    '(\\[[^\\[]*\\])|(\\\\)?' + '(' + formattingTokens.join('|') + '|.)', 'g'
  )
}

function addLeadingZeros (number, targetLength) {
  var output = Math.abs(number).toString()
  while (output.length < targetLength) {
    output = '0' + output
  }
  return output
}

module.exports = format
