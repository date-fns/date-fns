import buildMatchFn from '../../../_lib/buildMatchFn/index.js'
import buildParseFn from '../../../_lib/buildParseFn/index.js'
import buildMatchPatternFn from '../../../_lib/buildMatchPatternFn/index.js'
import parseDecimal from '../../../_lib/parseDecimal/index.js'

var matchOrdinalNumbersPattern = /^ke-(\d+)?/i

var matchWeekdaysPatterns = {
  narrow: /^(mg|sn|sl|rb|km|jm|sb)/i,
  short: /^(min|sen|sel|rab|kam|jum|sab)/i,
  long: /^(minggu|senin|selasa|rabu|kamis|jumat|sabtu)/i
}

var parseWeekdayPatterns = {
  any: [/^m/i, /^sn/i, /^sl/i, /^r/i, /^k/i, /^j/i, /^sa/i]
}

var matchMonthsPatterns = {
  short: /^(jan|feb|mar|apr|mei|jun|jul|ags|sep|okt|nov|dec)/i,
  long: /^(januari|februari|maret|april|mei|juni|juli|agustus|september|oktober|november|desember)/i
}

var parseMonthPatterns = {
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^mei/i, /^jun/i, /^jul/i, /^ag/i, /^s/i, /^o/i, /^n/i, /^d/i]
}

var matchTimesOfDayPatterns = {
  short: /^(am|pm)/i,
  long: /^([ap]\.?\s?m\.?)/i
}

var parseTimeOfDayPatterns = {
  any: [/^a/i, /^p/i]
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
