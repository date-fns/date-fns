import buildMatchPatternFn from '../../../_lib/buildMatchPatternFn/index.js'
import buildMatchFn from '../../../_lib/buildMatchFn/index.js'

var matchOrdinalNumberPattern = /^(\d+)(º)?/i
var parseOrdinalNumberPattern = /\d+/i

var matchEraPatterns = {
  narrow: /^(aC|dC)/i,
  abbreviated: /^(a\.?\s?C\.?|a\.?\s?e\.?\s?v\.?|d\.?\s?C\.?|e\.?\s?v\.?)/i,
  wide: /^(avanti Cristo|avanti Era Volgare|dopo Cristo|Era Volgare)/i
}
var parseEraPatterns = {
  any: [/^a/i, /^(d|e)/i]
}

var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^t[1234]/i,
  wide: /^[1234](º)? trimestre/i
}
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
}

var matchMonthPatterns = {
  narrow: /^[gfmalsond]/i,
  abbreviated: /^(gen|feb|mar|apr|mag|giu|lug|ago|set|ott|nov|dic)/i,
  wide: /^(gennaio|febbraio|marzo|aprile|maggio|giugno|luglio|agosto|settembre|ottobre|novembre|dicembre)/i
}
var parseMonthPatterns = {
  narrow: [/^g/i, /^f/i, /^m/i, /^a/i, /^m/i, /^g/i, /^l/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ge/i, /^f/i, /^mar/i, /^ap/i, /^mag/i, /^gi/i, /^l/i, /^ag/i, /^s/i, /^o/i, /^n/i, /^d/i]
}

var matchDayPatterns = {
  narrow: /^[dlmgvs]/i,
  short: /^(do|lu|ma|me|gi|ve|sa)/i,
  abbreviated: /^(dom|lun|mar|mer|gio|ven|sab)/i,
  wide: /^(domenica|luned[i|ì]|marted[i|ì]|mercoled[i|ì]|gioved[i|ì]|venerd[i|ì]|sabato)/i
}
var parseDayPatterns = {
  narrow: [/^d/i, /^l/i, /^m/i, /^m/i, /^g/i, /^v/i, /^s/i],
  any: [/^d/i, /^l/i, /^ma/i, /^me/i, /^g/i, /^v/i, /^s/i]
}

var matchDayPeriodPatterns = {
  narrow: /^(a|m\.|p|mezzanotte|mezzogiorno|(di|del) (mattina|pomeriggio|sera|notte))/i,
  any: /^([ap]\.?\s?m\.?|mezzanotte|mezzogiorno|(di|del) (mattina|pomeriggio|sera|notte))/i
}
var parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mezza/i,
    noon: /^mezzo/i,
    morning: /mattina/i,
    afternoon: /pomeriggio/i,
    evening: /sera/i,
    night: /notte/i
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
