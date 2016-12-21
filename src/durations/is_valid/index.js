var TIME_DESIGNATOR = 'T'
var PERIOD_DESIGNATOR = 'P'

var MATCH_NUMBER = /[+-]?\d+(\.\d+)?/.source

var MATCH_YEARS = '(' + MATCH_NUMBER + 'Y)?'
var MATCH_MONTHS = '(' + MATCH_NUMBER + 'M)?'
var MATCH_WEEKS = '(' + MATCH_NUMBER + 'W)?'
var MATCH_DAYS = '(' + MATCH_NUMBER + 'D)?'
var MATCH_HOURS = '(' + MATCH_NUMBER + 'H)?'
var MATCH_MINUTES = '(' + MATCH_NUMBER + 'M)?'
var MATCH_SECONDS = '(' + MATCH_NUMBER + 'S)?'

var MATCH_DATE = MATCH_YEARS + MATCH_MONTHS + MATCH_WEEKS + MATCH_DAYS
var MATCH_TIME = '(' + TIME_DESIGNATOR + MATCH_HOURS + MATCH_MINUTES + MATCH_SECONDS + ')?'
var MATCH_DURATION = new RegExp('^' + PERIOD_DESIGNATOR + MATCH_DATE + MATCH_TIME + '$')

function isValid (isoDuration) {
  return MATCH_DURATION.test(isoDuration.toUpperCase())
}

module.exports = isValid
