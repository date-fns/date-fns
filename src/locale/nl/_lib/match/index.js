import buildMatchPatternFn from '../../../_lib/buildMatchPatternFn/index.js'
import buildMatchFn from '../../../_lib/buildMatchFn/index.js'

var matchOrdinalNumberPattern = /^(\d+)(e)?/i
var parseOrdinalNumberPattern = /\d+/i

// - Era Patterns | Matches
var matchEraPatterns = {
  narrow: /^(VC|NC)/i,
  abbreviated: /^(V\.Chr\.|N\.Ch\r.)/i,
  wide: /^(voor Christus|na Christus)/i
}

var parseEraPatterns = {
  any: [/^VC/i, /^(NC)/i],
  wide: [/^(voor Christus)/i, /^(na Christus)/i]
}

var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](ste|de)? kwartaal/i
}

var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
}

// - Month Patterns | Matches
var matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mrt|apr|mei|jun|jul|aug|sep|okt|nov|dec)/i,
  wide: /^(januari|februari|maart|april|mei|juni|juli|augustus|september|oktober|november|december)/i
}

var parseMonthPatterns = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^mei/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
}

// - Day Patterns | Matches
var matchDayPatterns = {
  narrow: /^[smtwf]/i,
  short: /^(zo|ma|di|wo|do|vr|za)/i,
  abbreviated: /^(zon|maa|din|woe|don|vri|zat)/i,
  wide: /^(zondag|maandag|dinsdag|woensdag|donderdag|vrijdag|zaterdag)/i
}

var parseDayPatterns = {
  narrow: [/^zo/i, /^m/i, /^di/i, /^w/i, /^do/i, /^v/i, /^za/i],
  short: [/^zo/i, /^ma/i, /^di/i, /^wo/i, /^do/i, /^vr/i, /^za/i],
  any: [/^zon/i, /^maa/i, /^din/i, /^woe/i, /^don/i, /^vri/i, /^zat/i]
}

// - Day Period Patterns | Matches
var matchDayPeriodPatterns = {
  narrow: /^(a|p|mi|n|s|(in de|om) (ochtend|middag|avond|nachts))/i,
  any: /^([ap]\.?\s?m\.?|middag|(in de|om) (ochtend|middag|avond|nacht))/i
}

var parseDayPeriodPatterns = {
  any: {
    midnight: /^middernacht/i,
    noon: /^middag/i,
    morning: /ochtend/i,
    afternoon: /middag/i,
    evening: /avond/i,
    night: /nacht/i
  }
}

var match = {
  ordinalNumber: buildMatchPatternFn({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: function (value) {
      return parseInt(value, 10)
    }
  }),

  era: buildMatchFn({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseEraPatterns,
    defaultParseWidth: 'any'
  }),

  quarter: buildMatchFn({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: 'any',
    valueCallback: function (index) {
      return index + 1
    }
  }),

  month: buildMatchFn({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: 'any'
  }),

  day: buildMatchFn({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseDayPatterns,
    defaultParseWidth: 'any'
  }),

  dayPeriod: buildMatchFn({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: 'any',
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: 'any'
  })
}

export default match
