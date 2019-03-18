import buildMatchPatternFn from '../../../_lib/buildMatchPatternFn/index.js'
import buildMatchFn from '../../../_lib/buildMatchFn/index.js'

var matchOrdinalNumberPattern = /^(\d+)('inci|'nci|'üncü|'ncı|'uncu|'ıncı)?/i
var parseOrdinalNumberPattern = /\d+/i

var matchEraPatterns = {
  narrow: /^(mö|ms)/i,
  abbreviated: /^(mö|ms)/i,
  wide: /^(milattan önce|milattan sonra)/i
}
var parseEraPatterns = {
  any: [/^mö/i, /^ms/i],
  wide: [/^milattan önce/i, /^milattan sonra/i]
}

var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](\.)? çeyrek/i
}
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
}

var matchMonthPatterns = {
  narrow: /^[oşmnhtaek]/i,
  abbreviated: /^(Oca|Şub|Mar|Nis|May|Haz|Tem|Ağu|Eyl|Eki|Kas|Ara)/i,
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
    /^mar/i,
    /^ni/i,
    /^may/i,
    /^h/i,
    /^t/i,
    /^ağ/i,
    /^ey/i,
    /^ek/i,
    /^k/i,
    /^ar/i
  ]
}

var matchDayPatterns = {
  narrow: /^[psçc]/i,
  short: /^(Pz|Pt|Sa|Ça|Pe|Cu|Ct)/i,
  abbreviated: /^(Paz|Pzt|Sal|Çar|Per|Cum|Cmt)/i,
  wide: /^(pazar|pazartesi|salı|çarşamba|perşembe|cuma|cumartesi)/i
}
var parseDayPatterns = {
  narrow: [/^p/i, /^p/i, /^s/i, /^ç/i, /^p/i, /^c/i, /^c/i],
  short: [/^pz/i, /^pt/i, /^sa/i, /^ça/i, /^pe/i, /^cu/i, /^ct/i],
  abbreviated: [/^paz/i, /^pzt/i, /^sal/i, /^çar/i, /^per/i, /^cum/i, /^cmt/i],
  any: [/^pazar/i, /^pazart/i, /^s/i, /^ç/i, /^p/i, /^cuma/i, /^cumar/i]
}

var matchDayPeriodPatterns = {
  any: /^(öö|ös|gece yarısı|öğlen|sabah|öğleden sonra|akşam|gece)/i
}
var parseDayPeriodPatterns = {
  any: {
    am: /^öö/i,
    pm: /^ös/i,
    midnight: /^gece yarısı/i,
    noon: /^öğlen/i,
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
