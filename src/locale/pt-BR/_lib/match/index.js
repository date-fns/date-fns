import buildMatchFn from '../../../_lib/buildMatchFn/index.js'
import buildParseFn from '../../../_lib/buildParseFn/index.js'
import buildMatchPatternFn from '../../../_lib/buildMatchPatternFn/index.js'
import parseDecimal from '../../../_lib/parseDecimal/index.js'

var matchOrdinalNumbersPattern = /^(\d+)[ºo]?/i

var matchWeekdaysPatterns = {
  narrow: /^(do|sg|te|qa|qi|sx|sa)/i,
  short: /^(dom|seg|ter|qua|qui|sex|s[aá]b)/i,
  long: /^(domingo|(segunda|ter[cç]a|quarta|quinta|sexta)([- ]feira)?|s[aá]bado)/i
}

var parseWeekdayPatterns = {
  narrow: [/^d/i, /^sg/i, /^t/i, /^qa/i, /^qi/i, /^sx/i, /^sa/i],
  short: [/^d/i, /^seg/i, /^t/i, /^qua/i, /^qui/i, /^sex/i, /^s[aá]b/i],
  long: [/^d/i, /^seg/i, /^t/i, /^qua/i, /^qui/i, /^sex/i, /^s[aá]b/i]
}

var matchMonthsPatterns = {
  short: /^(jan|fev|mar|abr|mai|jun|jul|ago|set|out|nov|dez)/i,
  long: /^(janeiro|fevereiro|março|abril|maio|junho|julho|agosto|setembro|outubro|novembro|dezembro)/i
}

var parseMonthPatterns = {
  any: [/^ja/i, /^f/i, /^mar/i, /^ab/i, /^mai/i, /^jun/i, /^jul/i, /^ag/i, /^s/i, /^o/i, /^n/i, /^d/i]
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
  weekday: buildParseFn(parseWeekdayPatterns, 'long'),
  months: buildMatchFn(matchMonthsPatterns, 'long'),
  month: buildParseFn(parseMonthPatterns, 'any'),
  timesOfDay: buildMatchFn(matchTimesOfDayPatterns, 'long'),
  timeOfDay: buildParseFn(parseTimeOfDayPatterns, 'any')
}

export default match
