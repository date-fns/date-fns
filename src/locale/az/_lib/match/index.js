import buildMatchPatternFn from '../../../_lib/buildMatchPatternFn/index'
import buildMatchFn from '../../../_lib/buildMatchFn/index'

var matchOrdinalNumberPattern = /^(\d+)(-?(ci|inci|nci|uncu|üncü|ncı))?/i
var parseOrdinalNumberPattern = /\d+/i
var matchEraPatterns = {
  narrow: /^(b|a)$/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)$/i,
  wide: /^(Hz. İsa'dan öncə|ümumi eradan əvvəl|anno domini|ümumi dövr)$/i
}
var parseEraPatterns = {
  any: [/^b$/i, /^(a|c)$/i]
}
var matchQuarterPatterns = {
  narrow: /^[1234]$/i,
  abbreviated: /^K[1234]$/i,
  wide: /^[1234](ci)? kvartal$/i
}
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
}
var matchMonthPatterns = {
  narrow: /^[(?-i)yfmaisond]$/i,
  abbreviated: /^(Yan|Fev|Mar|Apr|May|İyun|İyul|Avq|Sen|Okt|Noy|Dek)$/i,
  wide: /^(Yanvar|Fevral|Mart|Aprel|May|İyun|İyul|Avgust|Sentyabr|Oktyabr|Noyabr|Dekabr)$/i
}
var parseMonthPatterns = {
  narrow: [
    /^[(?-i)y]$/i,
    /^[(?-i)f]$/i,
    /^[(?-i)m]$/i,
    /^[(?-i)a]$/i,
    /^[(?-i)m]$/i,
    /^[(?-i)i]$/i,
    /^[(?-i)i]$/i,
    /^[(?-i)a]$/i,
    /^[(?-i)s]$/i,
    /^[(?-i)o]$/i,
    /^[(?-i)n]$/i,
    /^[(?-i)d]$/i
  ],
  abbreviated: [
    /^Yan$/i,
    /^Fev$/i,
    /^Mar$/i,
    /^Apr$/i,
    /^May$/i,
    /^İyun$/i,
    /^İyul$/i,
    /^Avg$/i,
    /^Sen$/i,
    /^Okt$/i,
    /^Noy$/i,
    /^Dek$/i
  ],
  wide: [
    /^Yanvar$/i,
    /^Fevral$/i,
    /^Mart$/i,
    /^Aprel$/i,
    /^May$/i,
    /^İyun$/i,
    /^İyul$/i,
    /^Avgust$/i,
    /^Sentyabr$/i,
    /^Oktyabr$/i,
    /^Noyabr$/i,
    /^Dekabr$/i
  ]
}

var matchDayPatterns = {
  narrow: /^(B\.|B\.e|Ç\.a|Ç\.|C\.a|C\.|Ş\.)$/i,
  short: /^(B\.|B\.e|Ç\.a|Ç\.|C\.a|C\.|Ş\.)$/i,
  abbreviated: /^(Baz\.e|Çər|Çər\.a|Cüm|Cüm\.a|Şə)$/i,
  wide: /^(Bazar|Bazar ertəsi|Çərşənbə axşamı|Çərşənbə|Cümə axşamı|Cümə|Şənbə)$/i
}
var parseDayPatterns = {
  narrow: [
    /^B\.$/i,
    /^B\.e$/i,
    /^Ç\.a$/i,
    /^Ç\.$/i,
    /^C\.a$/i,
    /^C\.$/i,
    /^Ş\.$/i
  ],
  abbreviated: [
    /^Baz\.e$/i,
    /^Çər$/i,
    /^Çər\.a$/i,
    /^Cüm$/i,
    /^Cüm\.a$/i,
    /^Şə$/i
  ],
  wide: [
    /^Bazar$/i,
    /^Bazar ertəsi$/i,
    /^Çərşənbə axşamı$/i,
    /^Çərşənbə$/i,
    /^Cümə axşamı$/i,
    /^Cümə$/i,
    /^Şənbə$/i
  ],
  any: [/^B\.$/i, /^B\.e$/i, /^Ç\.a$/i, /^Ç\.$/i, /^C\.a$/i, /^C\.$/i, /^Ş\.$/i]
}

var matchDayPeriodPatterns = {
  narrow: /^(a|p|gecəyarı|gün|səhər|gündüz|axşam|gecə)$/i,
  any: /^(am|pm|a\.m\.|p\.m\.|AM|PM|gecəyarı|gün|səhər|gündüz|axşam|gecə)$/i
}
var parseDayPeriodPatterns = {
  any: {
    am: /^a$/i,
    pm: /^p$/i,
    midnight: /^gecəyarı$/i,
    noon: /^gün$/i,
    morning: /səhər$/i,
    afternoon: /gündüz$/i,
    evening: /axşam$/i,
    night: /gecə$/i
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
