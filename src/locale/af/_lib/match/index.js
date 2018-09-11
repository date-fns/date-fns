import buildMatchFn from '../../../_lib/buildMatchFn/index.js'
import buildParseFn from '../../../_lib/buildParseFn/index.js'
import buildMatchPatternFn from '../../../_lib/buildMatchPatternFn/index.js'
import parseDecimal from '../../../_lib/parseDecimal/index.js'

var matchOrdinalNumbersPattern = /^(\d+)(ste|de)?/i

var matchWeekdaysPatterns = {
  narrow: /^(so|ma|di|wo|do|vr|sa)/i,
  short: /^(son|maa|din|woe|don|vry|sat)/i,
  long: /^(sondag|maandag|dinsdag|woensdag|donderdag|vrydag|saterdag)/i
}

var parseWeekdayPatterns = {
  any: [/^so/i, /^m/i, /^di/i, /^w/i, /^do/i, /^v/i, /^sa/i]
}

var matchMonthsPatterns = {
  short: /^(jan|feb|mar|apr|mei|jun|jul|aug|sep|okt|nov|des)/i,
  long: /^(januarie|februarie|maart|april|mei|junie|julie|augustus|september|oktober|november|desember)/i
}

var parseMonthPatterns = {
  any: [/^ja/i, /^f/i, /^ma/i, /^ap/i, /^me/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
}

var matchTimesOfDayPatterns = {
  short: /^(vm|nm)/i,
  long: /^(vm|nm)/i
}

var parseTimeOfDayPatterns = {
  any: [/^v/i, /^n/i]
}

var match = {
  ordinalNumbers: buildMatchPatternFn(matchOrdinalNumbersPattern),
  ordinalNumber: parseDecimal,
  weekdays: buildMatchFn(matchWeekdaysPatterns, 'long'),
  weekday: buildParseFn(parseWeekdayPatterns, 'any'),
  months: buildMatchFn(matchMonthsPatterns, 'long'),
  month: buildParseFn(parseMonthPatterns, 'any'),
  timesOfDay: buildMatchFn(matchTimesOfDayPatterns, 'long'),
  timeOfDay: buildParseFn(parseTimeOfDayPatterns, 'any')
}

export default match
