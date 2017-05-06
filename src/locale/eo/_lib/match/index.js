import buildMatchFn from '../../../_lib/buildMatchFn/index.js'
import buildParseFn from '../../../_lib/buildParseFn/index.js'
import buildMatchPatternFn from '../../../_lib/buildMatchPatternFn/index.js'
import parseDecimal from '../../../_lib/parseDecimal/index.js'

var matchOrdinalNumbersPattern = /^(\d+)(-?a)?/i

var matchWeekdaysPatterns = {
  narrow: /^(di|lu|ma|me|(ĵ|jx)a|ve|sa)/i,
  short: /^(dim|lun|mar|mer|(ĵ|jx)a(ŭ|ux)|ven|sab)/i,
  long: /^(diman(ĉ|cx)o|lundo|mardo|merkredo|(ĵ|jx)a(ŭ|ux)do|vendredo|sabato)/i
}

var parseWeekdayPatterns = {
  any: [/^d/i, /^l/i, /^ma/i, /^me/i, /^(j|ĵ)/i, /^v/i, /^s/i]
}

var matchMonthsPatterns = {
  short: /^(jan|feb|mar|apr|maj|jun|jul|a(ŭ|ux)g|sep|okt|nov|dec)/i,
  long: /^(januaro|februaro|marto|aprilo|majo|junio|julio|a(ŭ|ux)gusto|septembro|oktobro|novembro|decembro)/i
}

var parseMonthPatterns = {
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^maj/i, /^jun/i, /^jul/i, /^a(u|ŭ)/i, /^s/i, /^o/i, /^n/i, /^d/i]
}

var matchTimesOfDayPatterns = {
  short: /^([ap][.\s]?t[.\s]?m[.\s]?)/i,
  long: /^(anta(ŭ|ux)tagmeze|posttagmeze)/i
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
