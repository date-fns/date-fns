import buildMatchPatternFn from '../../../_lib/buildMatchPatternFn/index'
import buildMatchFn from '../../../_lib/buildMatchFn/index'

var matchOrdinalNumberPattern = /^(\d+)e?/i
var parseOrdinalNumberPattern = /\d+/i

var matchEraPatterns = {
  narrow: /^([fn]\.? ?K\.?)/,
  abbreviated: /^([fn]\. ?Kr\.?)/,
  wide: /^((foar|nei) Kristus)/,
}
var parseEraPatterns = {
  any: [/^f/, /^n/],
}

var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^K[1234]/i,
  wide: /^[1234]e fearnsjier/i,
}

var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i],
}

var matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan.|feb.|mrt.|apr.|mai.|jun.|jul.|aug.|sep.|okt.|nov.|des.)/i,
  wide: /^(jannewaris|febrewaris|maart|april|maaie|juny|july|augustus|septimber|oktober|novimber|desimber)/i,
}
var parseMonthPatterns = {
  narrow: [
    /^j/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^j/i,
    /^j/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i,
  ],
  any: [
    /^jan/i,
    /^feb/i,
    /^m(r|a)/i,
    /^apr/i,
    /^mai/i,
    /^jun/i,
    /^jul/i,
    /^aug/i,
    /^sep/i,
    /^okt/i,
    /^nov/i,
    /^des/i,
  ],
}

var matchDayPatterns = {
  narrow: /^[smtwf]/i,
  short: /^(si|mo|ti|wo|to|fr|so)/i,
  abbreviated: /^(snein|moa|tii|woa|ton|fre|sneon)/i,
  wide: /^(snein|moandei|tiisdei|woansdei|tongersdei|freed|sneon)/i,
}
var parseDayPatterns = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^sn/i, /^mo/i, /^ti/i, /^wo/i, /^to/i, /^fr/i, /^sn/i],
}

var matchDayPeriodPatterns = {
  any: /^(am|pm|middernacht|middeis|moarns|middei|jûns|nachts)/i,
}
var parseDayPeriodPatterns = {
  any: {
    am: /^am/i,
    pm: /^pm/i,
    midnight: /^middernacht/i,
    noon: /^middei/i,
    morning: /moarns/i,
    afternoon: /^middeis/i,
    evening: /jûns/i,
    night: /nachts/i,
  },
}

var match = {
  ordinalNumber: buildMatchPatternFn({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: function (value) {
      return parseInt(value, 10)
    },
  }),

  era: buildMatchFn({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseEraPatterns,
    defaultParseWidth: 'any',
  }),

  quarter: buildMatchFn({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: 'any',
    valueCallback: function (index) {
      return index + 1
    },
  }),

  month: buildMatchFn({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: 'any',
  }),

  day: buildMatchFn({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseDayPatterns,
    defaultParseWidth: 'any',
  }),

  dayPeriod: buildMatchFn({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: 'any',
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: 'any',
  }),
}

export default match
