import buildMatchFn from '../../../_lib/buildMatchFn/index.js'
import buildParseFn from '../../../_lib/buildParseFn/index.js'
import buildMatchPatternFn from '../../../_lib/buildMatchPatternFn/index.js'
import parseDecimal from '../../../_lib/parseDecimal/index.js'

var matchOrdinalNumbersPattern = /^(\d+)(a|e)?/i

var matchWeekdaysPatterns = {
  narrow: /^(sö|må|ti|on|to|fr|lö)/i,
  short: /^(sön|mån|tis|ons|tor|fre|lör)/i,
  long: /^(söndag|måndag|tisdag|onsdag|torsdag|fredag|lördag)/i
}

var parseWeekdayPatterns = {
  any: [/^s/i, /^m/i, /^ti/i, /^o/i, /^to/i, /^f/i, /^l/i]
}

var matchMonthsPatterns = {
  short: /^(jan|feb|mar|apr|maj|jun|jul|aug|sep|okt|nov|dec)/i,
  long: /^(januari|februari|mars|april|maj|juni|july|august|september|oktober|november|december)/i
}

var parseMonthPatterns = {
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^maj/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
}

var matchTimesOfDayPatterns = {
  short: /^(f.m.|e.m.)/i
}

var parseTimeOfDayPatterns = {
  any: [/^f/i, /^e/i]
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
