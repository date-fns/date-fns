import buildMatchFn from '../../../_lib/buildMatchFn/index.js'
import buildParseFn from '../../../_lib/buildParseFn/index.js'
import buildMatchPatternFn from '../../../_lib/buildMatchPatternFn/index.js'
import parseDecimal from '../../../_lib/parseDecimal/index.js'

const matchOrdinalNumbersPattern = /^(\d+)(th|st|nd|rd)?/i

const matchWeekdaysPatterns = {
  narrow: /^(ah|is|se|ra|kh|ju|sa)/i,
  short: /^(ahd|isn|sel|rab|kha|jum|sab)/i,
  long: /^(ahad|isnin|selasa|rabu|khamis|jumaat|sabtu)/i
}

const parseWeekdayPatterns = {
  any: [/^a/i, /^i/i, /^se/i, /^r/i, /^k/i, /^j/i, /^sa/i]
}

const matchMonthsPatterns = {
  short: /^(jan|feb|mac|apr|mei|jun|jul|ogo|sep|okt|nov|dis)/i,
  long: /^(januari|februari|mac|april|mei|jun|julai|ogos|september|oktober|november|disember)/i
}

const parseMonthPatterns = {
  any: [
    /^ja/i,
    /^f/i,
    /^ma/i,
    /^ap/i,
    /^me/i,
    /^jun/i,
    /^jul/i,
    /^og/i,
    /^s/i,
    /^ok/i,
    /^n/i,
    /^d/i
  ]
}

const matchTimesOfDayPatterns = {
  short: /^(am|pm)/i,
  long: /^([ap]\.?\s?m\.?)/i
}

const parseTimeOfDayPatterns = {
  any: [/^a/i, /^p/i]
}

const match = {
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
