import type { Quarter } from '../../../../types'
import type { Match } from '../../../types'
import buildMatchFn from '../../../_lib/buildMatchFn/index'
import buildMatchPatternFn from '../../../_lib/buildMatchPatternFn/index'

const matchOrdinalNumberPattern = /^(\d+)(\.)?/i
const parseOrdinalNumberPattern = /\d+/i

const matchEraPatterns = {
  narrow: /^(fKr|fot|eot|ot)/i,
  abbreviated: /^(f\.Kr\.?|f\.o\.t\.?|e\.Kr\.?|o\.t\.)/i,
  wide: /^(f.Kr.|fyri okkara tíðarrokning|e.Kr.|okkara tíðarrokning)/i,
}
const parseEraPatterns = {
  any: [/^f/i, /^(v|e)/i] as const,
}

const matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^[1234]. ársfj\./i,
  wide: /^[1234]\.? ársfjóðring/i,
}
const parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i] as const,
}

const matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan.|feb.|mar.|apr.|mai|jun.|jul.|aug.|sep.|okt.|nov.|dec.)/i,
  wide: /^(januar|februar|mars|apríl|mai|juni|juli|august|septembur|oktobur|novembur|desembur)/i,
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
  ] as const,
  any: [
    /^ja/i,
    /^f/i,
    /^mar/i,
    /^ap/i,
    /^mai/i,
    /^jun/i,
    /^jul/i,
    /^au/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i,
  ] as const,
}

const matchDayPatterns = {
  narrow: /^[smtmhfl]/i,
  short: /^(sun.|mán.|týs.|mik.|hós.|frí.|ley.)/i,
  abbreviated: /^(sun|mán|týs|mik|hós|frí|ley)/i,
  wide: /^(sunnudag|mándag|týsdag|mikudag|hósdag|fríggjadag|leygardag)/i,
}
const parseDayPatterns = {
  narrow: [/^s/i, /^m/i, /^t/i, /^m/i, /^h/i, /^f/i, /^l/i] as const,
  any: [/^s/i, /^m/i, /^t/i, /^mi/i, /^h/i, /^f/i, /^l/i] as const,
}

const matchDayPeriodPatterns = {
  narrow:
    /^(a|p|middnát|middagur|(um) (morgunin|seinnapartin|kvøldið|náttina))/i,
  any: /^([ap]\.?\s?m\.?|midnátt|middag|(um) (morgunin|seinnapartin|kvøldið|náttina))/i,
}
const parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /middnátt/i,
    noon: /middagur/i,
    morning: /morgun/i,
    afternoon: /seinnapart/i,
    evening: /kvøld/i,
    night: /nátt/i,
  },
}

const match: Match = {
  ordinalNumber: buildMatchPatternFn({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: (value) => parseInt(value, 10),
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
    valueCallback: (index) => (index + 1) as Quarter,
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
