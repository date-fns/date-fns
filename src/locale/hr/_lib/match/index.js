import buildMatchFn from '../../../_lib/buildMatchFn/index.js'
import buildParseFn from '../../../_lib/buildParseFn/index.js'
import buildMatchPatternFn from '../../../_lib/buildMatchPatternFn/index.js'
import parseDecimal from '../../../_lib/parseDecimal/index.js'

var matchOrdinalNumbersPattern = /^(\d+)(th|st|nd|rd)?/i

var matchWeekdaysPatterns = {
  narrow: /^(ne|po|ut|sr|če|pe|su)/i,
  short: /^(ned|pon|uto|sri|čet|pet|sub)/i,
  long: /^(nedjelja|ponedjeljak|utorak|srijeda|četvrtak|petak|subota)/i
}

var parseWeekdayPatterns = {
  any: [/^ne/i, /^po/i, /^ut/i, /^sr/i, /^če/i, /^pe/i, /^su/i]
}

var matchMonthsPatterns = {
  short: /^(sij|velj|ožu|tra|svi|lip|srp|kol|ruj|lis|stu|pro)/i,
  long: /^(siječanj|veljača|ožujak|travanj|svibanj|lipanj|srpanj|kolovoz|rujan|listopad|studeni|prosinac)/i
}

var parseMonthPatterns = {
  any: [/^si/i, /^v/i, /^ožu/i, /^tr/i, /^svi/i, /^lip/i, /^srp/i, /^ko/i, /^r/i, /^l/i, /^s/i, /^p/i]
}

var matchTimesOfDayPatterns = {
  long: /^(ujutro|popodne)/i
}

var parseTimeOfDayPatterns = {
  any: [/^u/i, /^p/i]
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
