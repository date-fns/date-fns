import buildMatchPatternFn from '../../../_lib/buildMatchPatternFn/index'
import buildMatchFn from '../../../_lib/buildMatchFn/index'

var matchOrdinalNumberPattern = /^(\d+)(.)?/i
var parseOrdinalNumberPattern = /\d+/i

var matchEraPatterns = {
  narrow: /^(k.a.|k.o.)/i,
  abbreviated: /^(k.a.|k.o.)/i,
  wide: /^(kristo aurretik|kristo ondoren)/i
}
var parseEraPatterns = {
  narrow: [/^k.a./i, /^k.o./i],
  abbreviated: [/^(k.a.)/i, /^(k.o.)/i],
  wide: [/^(kristo aurretik)/i, /^(kristo ondoren)/i]
}

var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^[1234]H/i,
  wide: /^[1234](.)? hiruhilekoa/i
}
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
}

var matchMonthPatterns = {
  narrow: /^[uomaei]/i,
  abbreviated: /^(urt|ots|mar|api|mai|eka|uzt|abu|ira|urr|aza|abe)/i,
  wide: /^(urtarrila|otsaila|martxoa|apirila|maiatza|ekaina|uztaila|abuztua|iraila|urria|azaroa|abendua)/i
}
var parseMonthPatterns = {
  narrow: [
    /^u/i,
    /^o/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^e/i,
    /^u/i,
    /^a/i,
    /^i/i,
    /^u/i,
    /^a/i,
    /^a/i
  ],
  any: [
    /^urt/i,
    /^ots/i,
    /^mar/i,
    /^api/i,
    /^mai/i,
    /^eka/i,
    /^uzt/i,
    /^abu/i,
    /^ira/i,
    /^urr/i,
    /^aza/i,
    /^abe/i
  ]
}

var matchDayPatterns = {
  narrow: /^[iaol]/i,
  short: /^(ig|al|as|az|og|or|lr)/i,
  abbreviated: /^(iga|ast|ast|ast|ost|ost|lar)/i,
  wide: /^(igandea|astelehena|asteartea|asteazkena|osteguna|ostirala|larunbata)/i
}
var parseDayPatterns = {
  narrow: [/^i/i, /^a/i, /^a/i, /^a/i, /^o/i, /^o/i, /^l/i],
  short: [/^ig/i, /^al/i, /^as/i, /^az/i, /^og/i, /^or/i, /^lr/i],
  abbreviated: [/^iga/i, /^ast/i, /^ast/i, /^ast/i, /^ost/i, /^ost/i, /^lar/i],
  wide: [
    /^igandea/i,
    /^astelehena/i,
    /^asteartea/i,
    /^asteazkena/i,
    /^osteguna/i,
    /^ostirala/i,
    /^larunbata/i
  ]
}

var matchDayPeriodPatterns = {
  narrow: /^(a|p|ge|eg|((goiza|goizean)|arratsaldea|(gaua|gauean)))/i,
  any: /^([ap]\.?\s?m\.?|gauerdia|eguerdia|((goiza|goizean)|arratsaldea|(gaua|gauean)))/i
}
var parseDayPeriodPatterns = {
  narrow: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^ge/i,
    noon: /^eg/i,
    morning: /goiz/i,
    afternoon: /arratsaldea/i,
    evening: /arratsaldea/i,
    night: /gau/i
  },
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^gauerdia/i,
    noon: /^eguerdia/i,
    morning: /goiz/i,
    afternoon: /arratsaldea/i,
    evening: /arratsaldea/i,
    night: /gau/i
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
