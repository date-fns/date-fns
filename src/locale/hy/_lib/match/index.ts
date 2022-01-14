import type { Quarter } from '../../../../types'
import type { Match } from '../../../types'
import buildMatchFn from '../../../_lib/buildMatchFn/index'
import buildMatchPatternFn from '../../../_lib/buildMatchPatternFn/index'

const matchOrdinalNumberPattern = /^(\d+)((-|֊)?(ին|րդ))?/i
const parseOrdinalNumberPattern = /\d+/i

const matchEraPatterns = {
  narrow: /^(Ք|Մ)/i,
  abbreviated: /^(Ք\.?\s?Ա\.?|Մ\.?\s?Թ\.?\s?Ա\.?|Մ\.?\s?Թ\.?|Ք\.?\s?Հ\.?)/i,
  wide: /^(քրիստոսից առաջ|մեր թվարկությունից առաջ|մեր թվարկության|քրիստոսից հետո)/i,
}
const parseEraPatterns = {
  any: [/^ք/i, /^մ/i] as const,
}

const matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^ք[1234]/i,
  wide: /^[1234]((-|֊)?(ին|րդ)) քառորդ/i,
}
const parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i] as const,
}

const matchMonthPatterns = {
  narrow: /^[հփմաօսնդ]/i,
  abbreviated: /^(հուն|փետ|մար|ապր|մայ|հուն|հուլ|օգս|սեպ|հոկ|նոյ|դեկ)/i,
  wide: /^(հունվար|փետրվար|մարտ|ապրիլ|մայիս|հունիս|հուլիս|օգոստոս|սեպտեմբեր|հոկտեմբեր|նոյեմբեր|դեկտեմբեր)/i,
}
const parseMonthPatterns = {
  narrow: [
    /^հ/i,
    /^փ/i,
    /^մ/i,
    /^ա/i,
    /^մ/i,
    /^հ/i,
    /^հ/i,
    /^օ/i,
    /^ս/i,
    /^հ/i,
    /^ն/i,
    /^դ/i,
  ] as const,
  any: [
    /^հու/i,
    /^փ/i,
    /^մար/i,
    /^ա/i,
    /^մայ/i,
    /^հուն/i,
    /^հուլ/i,
    /^օ/i,
    /^ս/i,
    /^հոկ/i,
    /^ն/i,
    /^դ/i,
  ] as const,
}

const matchDayPatterns = {
  narrow: /^[եչհոշկ]/i,
  short: /^(կր|եր|եք|չք|հգ|ուր|շբ)/i,
  abbreviated: /^(կիր|երկ|երք|չոր|հնգ|ուրբ|շաբ)/i,
  wide: /^(կիրակի|երկուշաբթի|երեքշաբթի|չորեքշաբթի|հինգշաբթի|ուրբաթ|շաբաթ)/i,
}
const parseDayPatterns = {
  narrow: [/^կ/i, /^ե/i, /^ե/i, /^չ/i, /^հ/i, /^(ո|Ո)/, /^շ/i] as const,
  short: [/^կ/i, /^եր/i, /^եք/i, /^չ/i, /^հ/i, /^(ո|Ո)/, /^շ/i] as const,
  abbreviated: [
    /^կ/i,
    /^երկ/i,
    /^երք/i,
    /^չ/i,
    /^հ/i,
    /^(ո|Ո)/,
    /^շ/i,
  ] as const,
  wide: [/^կ/i, /^երկ/i, /^երե/i, /^չ/i, /^հ/i, /^(ո|Ո)/, /^շ/i] as const,
}

const matchDayPeriodPatterns = {
  narrow: /^([ap]|կեսգշ|կեսօր|(առավոտը?|ցերեկը?|երեկո(յան)?|գիշերը?))/i,
  any: /^([ap]\.?\s?m\.?|կեսգիշեր(ին)?|կեսօր(ին)?|(առավոտը?|ցերեկը?|երեկո(յան)?|գիշերը?))/i,
}
const parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /կեսգիշեր/i,
    noon: /կեսօր/i,
    morning: /առավոտ/i,
    afternoon: /ցերեկ/i,
    evening: /երեկո/i,
    night: /գիշեր/i,
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
    defaultParseWidth: 'wide',
  }),

  dayPeriod: buildMatchFn({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: 'any',
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: 'any',
  }),
}

export default match
