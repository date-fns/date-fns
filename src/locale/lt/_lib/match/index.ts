import type { Quarter } from '../../../../types'
import type { Match } from '../../../types'
import buildMatchFn from '../../../_lib/buildMatchFn/index'
import buildMatchPatternFn from '../../../_lib/buildMatchPatternFn/index'

const matchOrdinalNumberPattern = /^(\d+)(-oji)?/i
const parseOrdinalNumberPattern = /\d+/i

const matchEraPatterns = {
  narrow: /^p(r|o)\.?\s?(kr\.?|me)/i,
  abbreviated: /^(pr\.\s?(kr\.|m\.\s?e\.)|po\s?kr\.|mūsų eroje)/i,
  wide: /^(prieš Kristų|prieš mūsų erą|po Kristaus|mūsų eroje)/i,
}
const parseEraPatterns = {
  wide: [/prieš/i, /(po|mūsų)/i] as const,
  any: [/^pr/i, /^(po|m)/i] as const,
}

const matchQuarterPatterns = {
  narrow: /^([1234])/i,
  abbreviated: /^(I|II|III|IV)\s?ketv?\.?/i,
  wide: /^(I|II|III|IV)\s?ketvirtis/i,
}
const parseQuarterPatterns = {
  narrow: [/1/i, /2/i, /3/i, /4/i] as const,
  any: [/I$/i, /II$/i, /III/i, /IV/i] as const,
}

const matchMonthPatterns = {
  narrow: /^[svkbglr]/i,
  abbreviated: /^(saus\.|vas\.|kov\.|bal\.|geg\.|birž\.|liep\.|rugp\.|rugs\.|spal\.|lapkr\.|gruod\.)/i,
  wide: /^(sausi(s|o)|vasari(s|o)|kov(a|o)s|balandž?i(s|o)|gegužės?|birželi(s|o)|liep(a|os)|rugpjū(t|č)i(s|o)|rugsėj(is|o)|spali(s|o)|lapkri(t|č)i(s|o)|gruodž?i(s|o))/i,
}
const parseMonthPatterns = {
  narrow: [
    /^s/i,
    /^v/i,
    /^k/i,
    /^b/i,
    /^g/i,
    /^b/i,
    /^l/i,
    /^r/i,
    /^r/i,
    /^s/i,
    /^l/i,
    /^g/i,
  ] as const,
  any: [
    /^saus/i,
    /^vas/i,
    /^kov/i,
    /^bal/i,
    /^geg/i,
    /^birž/i,
    /^liep/i,
    /^rugp/i,
    /^rugs/i,
    /^spal/i,
    /^lapkr/i,
    /^gruod/i,
  ] as const,
}

const matchDayPatterns = {
  narrow: /^[spatkš]/i,
  short: /^(sk|pr|an|tr|kt|pn|št)/i,
  abbreviated: /^(sk|pr|an|tr|kt|pn|št)/i,
  wide: /^(sekmadien(is|į)|pirmadien(is|į)|antradien(is|į)|trečiadien(is|į)|ketvirtadien(is|į)|penktadien(is|į)|šeštadien(is|į))/i,
}
const parseDayPatterns = {
  narrow: [/^s/i, /^p/i, /^a/i, /^t/i, /^k/i, /^p/i, /^š/i] as const,
  wide: [/^se/i, /^pi/i, /^an/i, /^tr/i, /^ke/i, /^pe/i, /^še/i] as const,
  any: [/^sk/i, /^pr/i, /^an/i, /^tr/i, /^kt/i, /^pn/i, /^št/i] as const,
}

const matchDayPeriodPatterns = {
  narrow: /^(pr.\s?p.|pop.|vidurnaktis|(vidurdienis|perpiet)|rytas|(diena|popietė)|vakaras|naktis)/i,
  any: /^(priešpiet|popiet$|vidurnaktis|(vidurdienis|perpiet)|rytas|(diena|popietė)|vakaras|naktis)/i,
}
const parseDayPeriodPatterns = {
  narrow: {
    am: /^pr/i,
    pm: /^pop./i,
    midnight: /^vidurnaktis/i,
    noon: /^(vidurdienis|perp)/i,
    morning: /rytas/i,
    afternoon: /(die|popietė)/i,
    evening: /vakaras/i,
    night: /naktis/i,
  },
  any: {
    am: /^pr/i,
    pm: /^popiet$/i,
    midnight: /^vidurnaktis/i,
    noon: /^(vidurdienis|perp)/i,
    morning: /rytas/i,
    afternoon: /(die|popietė)/i,
    evening: /vakaras/i,
    night: /naktis/i,
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
