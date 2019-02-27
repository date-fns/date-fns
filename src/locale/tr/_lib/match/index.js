import buildMatchPatternFn from '../../../_lib/buildMatchPatternFn/index.js'
import buildMatchFn from '../../../_lib/buildMatchFn/index.js'

var matchOrdinalNumberPattern = /^(\d+)(\.)?/i
var parseOrdinalNumberPattern = /\d+/i

var matchEraPatterns = {
  narrow: /^(mö|ms)/i,
  abbreviated: /^(mö|ms)/i,
  wide: /^(milattan önce|milattan sonra)/i
}
var parseEraPatterns = {
  any: [/(^mö|^milattan önce)/i, /(^ms|^milattan sonra)/i]
}

var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^(ilk çeyrek|ikinci çeyrek|üçüncü çeyrek|son çeyrek)/i
}
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
}

var matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(oca|şub|mar|nis|may|haz|tem|ağu|eyl|eki|kas|ara)/i,
  wide: /^(ocak|şubat|mart|nisan|mayıs|haziran|temmuz|ağustos|eylül|ekim|kasım|aralık)/i
}
var parseMonthPatterns = {
  narrow: [
    /^o/i,
    /^ş/i,
    /^m/i,
    /^n/i,
    /^m/i,
    /^h/i,
    /^t/i,
    /^a/i,
    /^e/i,
    /^e/i,
    /^k/i,
    /^a/i
  ],
  any: [
    /^o/i,
    /^ş/i,
    /^ma/i,
    /^n/i,
    /^ma/i,
    /^h/i,
    /^t/i,
    /^a/i,
    /^ey/i,
    /^ek/i,
    /^k/i,
    /^a/i
  ]
}

var matchDayPatterns = {
  narrow: /^[psçc]/i,
  short: /^(pz|pa|sa|ça|pe|cu|cm)/i,
  abbreviated: /^(paz|pzt|sal|çar|per|cum|cmt)/i,
  wide: /^(pazar|pazartesi|salı|çarşamba|perşembe|cuma|cumartesi)/i
}
var parseDayPatterns = {
  narrow: [/^p/i, /^p/i, /^s/i, /^ç/i, /^p/i, /^c/i, /^c/i],
  any: [/^pa/i, /^pa/i, /^s/i, /^ç/i, /^pe/i, /^cu/i, /^cu/i]
}

var matchDayPeriodPatterns = {
  narrow: /^(a|p|ge|ö (sabah|öğleden sonra|akşam|gece yarısı))/i,
  any: /^([ap]\.?\s?g\.?|gece|öğle (sabah|öğleden sonra|akşam|gece yarısı))/i
}
var parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^ge/i,
    noon: /^öğ/i,
    morning: /sabah/i,
    afternoon: /öğleden sonra/i,
    evening: /akşam/i,
    night: /gece/i
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
