import buildMatchPatternFn from '../../../_lib/buildMatchPatternFn/index'
import buildMatchFn from '../../../_lib/buildMatchFn/index'
import type { Match } from '../../../types'

const matchOrdinalNumberPattern = /^(\d+)(\.)?/i
const parseOrdinalNumberPattern = /\d+/i

const matchEraPatterns = {
  narrow: /^(v\.? ?Chr\.?|n\.? ?Chr\.?)/i,
  abbreviated: /^(v\.? ?Chr\.?|n\.? ?Chr\.?)/i,
  wide: /^(vor Christus|vor unserer Zeitrechnung|nach Christus|unserer Zeitrechnung)/i,
}
const parseEraPatterns = {
  any: [/^v/i, /^n/i],
}

const matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](\.)? Quartal/i,
}
const parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i],
}

const matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mär|apr|mai|jun|jul|aug|sep|okt|nov|dez)/i,
  wide: /^(januar|februar|märz|april|mai|juni|juli|august|september|oktober|november|dezember)/i,
}
const parseMonthPatterns = {
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
    /^ja/i,
    /^f/i,
    /^mär/i,
    /^ap/i,
    /^mai/i,
    /^jun/i,
    /^jul/i,
    /^au/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i,
  ],
}

const matchDayPatterns = {
  narrow: /^[smdmf]/i,
  short: /^(so|mo|di|mi|do|fr|sa)/i,
  abbreviated: /^(son?|mon?|die?|mit?|don?|fre?|sam?)\.?/i,
  wide: /^(sonntag|montag|dienstag|mittwoch|donnerstag|freitag|samstag)/i,
}
const parseDayPatterns = {
  any: [/^so/i, /^mo/i, /^di/i, /^mi/i, /^do/i, /^f/i, /^sa/i],
}

const matchDayPeriodPatterns = {
  narrow: /^(vm\.?|nm\.?|Mitternacht|Mittag|morgens|nachm\.?|abends|nachts)/i,
  abbreviated: /^(vorm\.?|nachm\.?|Mitternacht|Mittag|morgens|nachm\.?|abends|nachts)/i,
  wide: /^(vormittags|nachmittags|Mitternacht|Mittag|morgens|nachmittags|abends|nachts)/i,
}
const parseDayPeriodPatterns = {
  any: {
    am: /^v/i,
    pm: /^n/i,
    midnight: /^Mitte/i,
    noon: /^Mitta/i,
    morning: /morgens/i,
    afternoon: /nachmittags/i, // will never be matched. Afternoon is matched by `pm`
    evening: /abends/i,
    night: /nachts/i, // will never be matched. Night is matched by `pm`
  },
}

const match: Match = {
  ordinalNumber: buildMatchPatternFn({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: (value: string) => parseInt(value, 10),
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
    valueCallback: (index: number) => index + 1,
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
    defaultMatchWidth: 'wide',
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: 'any',
  }),
}

export default match
