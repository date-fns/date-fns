import buildMatchPatternFn from '../../../_lib/buildMatchPatternFn/index'
import buildMatchFn from '../../../_lib/buildMatchFn/index'
import type { Match } from '../../../types'
import type { Quarter } from '../../../../types'

const matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i
const parseOrdinalNumberPattern = /\d+/i

const matchEraPatterns = {
  narrow: /[قب]/,
  abbreviated: /[قب]\.م\./,
  wide: /(قبل|بعد) الميلاد/,
}
const parseEraPatterns = {
  any: [/قبل/, /بعد/] as const,
}

const matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /ر[1234]/,
  wide: /الربع (الأول|الثاني|الثالث|الرابع)/,
}
const parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i] as const,
}

const matchMonthPatterns = {
  narrow: /^[أيفمسند]/,
  abbreviated: /^(يناير|فبراير|مارس|أبريل|مايو|يونيو|يوليو|أغسطس|سبتمبر|أكتوبر|نوفمبر|ديسمبر)/,
  wide: /^(يناير|فبراير|مارس|أبريل|مايو|يونيو|يوليو|أغسطس|سبتمبر|أكتوبر|نوفمبر|ديسمبر)/,
}
const parseMonthPatterns = {
  narrow: [
    /^ي/i,
    /^ف/i,
    /^م/i,
    /^أ/i,
    /^م/i,
    /^ي/i,
    /^ي/i,
    /^أ/i,
    /^س/i,
    /^أ/i,
    /^ن/i,
    /^د/i,
  ] as const,
  any: [
    /^يناير/i,
    /^فبراير/i,
    /^مارس/i,
    /^أبريل/i,
    /^مايو/i,
    /^يونيو/i,
    /^يوليو/i,
    /^أغسطس/i,
    /^سبتمبر/i,
    /^أكتوبر/i,
    /^نوفمبر/i,
    /^ديسمبر/i,
  ] as const,
}

const matchDayPatterns = {
  narrow: /^[حنثرخجس]/i,
  short: /^(أحد|اثنين|ثلاثاء|أربعاء|خميس|جمعة|سبت)/i,
  abbreviated: /^(أحد|اثنين|ثلاثاء|أربعاء|خميس|جمعة|سبت)/i,
  wide: /^(الأحد|الاثنين|الثلاثاء|الأربعاء|الخميس|الجمعة|السبت)/i,
}
const parseDayPatterns = {
  narrow: [/^ح/i, /^ن/i, /^ث/i, /^ر/i, /^خ/i, /^ج/i, /^س/i] as const,
  wide: [
    /^الأحد/i,
    /^الاثنين/i,
    /^الثلاثاء/i,
    /^الأربعاء/i,
    /^الخميس/i,
    /^الجمعة/i,
    /^السبت/i,
  ] as const,
  any: [/^أح/i, /^اث/i, /^ث/i, /^أر/i, /^خ/i, /^ج/i, /^س/i] as const,
}

const matchDayPeriodPatterns = {
  narrow: /^(ص|م|منتصف الليل|الظهر|بعد الظهر|في الصباح|في المساء|في الليل)/,
  any: /^(ص|م|منتصف الليل|الظهر|بعد الظهر|في الصباح|في المساء|في الليل)/,
}
const parseDayPeriodPatterns = {
  any: {
    am: /^ص/,
    pm: /^م/,
    midnight: /منتصف الليل/,
    noon: /الظهر/,
    afternoon: /بعد الظهر/,
    morning: /في الصباح/,
    evening: /في المساء/,
    night: /في الليل/,
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
