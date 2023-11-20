import type { Quarter } from '../../../../types'
import type { Match } from '../../../types'
import buildMatchFn from '../../../_lib/buildMatchFn/index'
import buildMatchPatternFn from '../../../_lib/buildMatchPatternFn/index'

const matchOrdinalNumberPattern = /^\d+\.?/i
const parseOrdinalNumberPattern = /\d+/i

const matchEraPatterns = {
  any: /^(?:[fe]\.?\s?Kr?\.?|(?:fyrir|eftir) Krist)/i,
}
const parseEraPatterns = {
  any: [/^f/i, /^e/i] as const,
}

const matchQuarterPatterns = {
  any: /^(?:F[1234]|[1234](?:\.\s(?:árs)?fjórðung(?:ur|i|s)?|\.?\s?F\.?)?)/i,
}
const parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i] as const,
}

const matchMonthPatterns = {
  any: new RegExp(
    '^(?:' +
      [
        /ja(?:n(?:\.|úar)?)?/.source,
        /f(?:eb(?:\.|rúar)?)?/.source,
        /m(?:r|ar[.s]?)/.source,
        /a(?:pr(?:\.|íl)?)?/.source,
        /m(?:í|aí\.?)/.source,
        /j(?:n|ún[.í]?)/.source,
        /j(?:l|úl[.í]?)/.source,
        /á(?:gú(?:\.|st)?)?/.source,
        /s(?:ept?(?:\.|ember)?)?/.source,
        /o(?:kt(?:\.|óber)?)?/.source,
        /n(?:óv(?:\.|ember)?)?/.source,
        /d(?:es(?:\.|ember)?)?/.source,
      ].join('|') +
      ')',
    'i'
  ),
}

const parseMonthPatterns = {
  any: [
    /^ja/i,
    /^f/i,
    /^ma?r/i,
    /^a/i,
    /^ma?í/i,
    /^jú?n/i,
    /^jú?l/i,
    /^á/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i,
  ] as const,
}

const matchDayPatterns = {
  any: new RegExp(
    '^(?:' +
      [
        /s(?:u(?:nnud(?:\.|agur)?|n?\.?)?)?/.source,
        /má(?:n(?:ud(?:\.|agur)?|\.?)?|\.?)?/.source,
        /þ(?:r(?:iðjud(?:\.|agur)?|i?\.?)?)?/.source,
        /mi(?:ð(?:\.|v(?:d\.?|ikud(?:\.|agur)?)?)?|\.?)?/.source,
        /fi(?:m(?:\.|mtud(?:\.|agur)?|\.?)?|\.?)?/.source,
        /fö(?:s(?:\.|tud(?:\.|agur)?|\.?)?|\.?)?/.source,
        /l(?:a(?:ugard(?:\.|agur)?|u?\.?)?)?/.source,
      ].join('|') +
      ')',
    'i'
  ),
}
const parseDayPatterns = {
  any: [/^s/i, /^má/i, /^þ/i, /^mi/i, /^fi/i, /^fö/i, /^l/i] as const,
}

// TODO: Merge the below "narrow" and "any" RegExps for more flexible/lenient parsing
const matchDayPeriodPatterns = {
  narrow: /^(?:fh?|eh?|síðdegis|(?:á|að|um) (?:morgni|kvöld|nótt|miðnætti))/i,
  any: /^(?:fyrir hádegi|eftir hádegi|[ef]\.?h\.?|síðdegis|morgunn|(?:á|að|um) (?:morgni|kvöld|nótt|miðnætti))/i,
}
const parseDayPeriodPatterns = {
  any: {
    am: /^f/i,
    pm: /^e/i,
    midnight: /^mi/i,
    noon: /^há/i,
    morning: /mo/i,
    afternoon: /sí/i,
    evening: /kv/i,
    night: /nó/i,
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
    defaultMatchWidth: 'any',
    parsePatterns: parseEraPatterns,
    defaultParseWidth: 'any',
  }),

  quarter: buildMatchFn({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: 'any',
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: 'any',
    valueCallback: (index) => (index + 1) as Quarter,
  }),

  month: buildMatchFn({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: 'any',
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: 'any',
  }),

  day: buildMatchFn({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: 'any',
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
