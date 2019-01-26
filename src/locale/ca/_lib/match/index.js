import buildMatchPatternFn from '../../../_lib/buildMatchPatternFn/index.js'
import buildMatchFn from '../../../_lib/buildMatchFn/index.js'

var matchOrdinalNumberPattern = /^(\d+)(è|er|on|er|rt)?/i
var parseOrdinalNumberPattern = /\d+/i

var matchEraPatterns = {
  narrow: /^(ac|dc|a|d)/i,
  abbreviated: /^(a\.?\s?c\.?|a\.?\s?e\.?\s?c\.?|d\.?\s?c\.?|e\.?\s?c\.?)/i,
  wide: /^(abans de crist|abans de la era com[uú]|despr[eé]s de crist|era com[uú])/i
}
var parseEraPatterns = {
  any: [/^ac/i, /^dc/i],
  wide: [
    /^(abans de crist|abans de la era com[uú])/i,
    /^(despr[eé]s de crist|era com[uú])/i
  ]
}

var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^T[1234]/i,
  wide: /^[1234](è|er|on|er|rt)? trimestre/i
}
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
}

var matchMonthPatterns = {
  narrow: /^[gfmajsond]/i,
  abbreviated: /^(gen|febr|març|abr|maig|juny|jul|ag|set|oct|nov|des)/i,
  wide: /^(gener|febrer|març|abril|maig|juny|juliol|agost|setembre|octubre|novembre|desembre)/i
}
var parseMonthPatterns = {
  narrow: [
    /^g/i,
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
    /^d/i
  ],
  any: [
    /^gen/i,
    /^febr/i,
    /^març/i,
    /^abr/i,
    /^maig/i,
    /^juny/i,
    /^jul/i,
    /^ag/i,
    /^set/i,
    /^oct/i,
    /^nov/i,
    /^des/i
  ]
}

var matchDayPatterns = {
  narrow: /^(dg|dl|dt|dm|dj|dv|ds)/i,
  short: /^(dg\.|dl\.|dt\.|dm\.|dj\.|dv\.|ds\.)/i,
  abbreviated: /^(diu|dil|dima|dim|dij|div|dis)/i,
  wide: /^(diumenge|dilluns|dimarts|dimecres|dijous|divendres|dissabte)/i
}
var parseDayPatterns = {
  narrow: [/^dg/i, /^dl/i, /^dt/i, /^dm/i, /^dj/i, /^dv/i, /^ds/i],
  abbreviated: [/^diu/i, /^dil/i, /^dima/i, /^dim/i, /^dij/i, /^div/i, /^dis/i],
  wide: [
    /^diumenge/i,
    /^dilluns/i,
    /^dimarts/i,
    /^dimecres/i,
    /^dijous/i,
    /^divendres/i,
    /^disssabte/i
  ],
  any: [/^dg/i, /^dl/i, /^dt/i, /^dm/i, /^dj/i, /^dv/i, /^ds/i]
}

var matchDayPeriodPatterns = {
  narrow: /^(a|p|mn|md|(del|de la) (matí|tarda|vespre|nit))/i,
  any: /^([ap]\.?\s?m\.?|mitjanit|migdia|(del|de la) (matí|tarda|vespre|nit))/i
}
var parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mit/i,
    noon: /^mig/i,
    morning: /matí/i,
    afternoon: /tarda/i,
    evening: /vespre/i,
    night: /nit/i
  }
}

var match = {
  ordinalNumber: buildMatchPatternFn({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: function(value) {
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
    valueCallback: function(index) {
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
