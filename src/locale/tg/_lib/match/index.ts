import type { Match } from '../../../types';
import type { Quarter } from '../../../../types';
import buildMatchPatternFn from '../../../_lib/buildMatchPatternFn/index';
import buildMatchFn from '../../../_lib/buildMatchFn/index';

const matchOrdinalNumberPattern = /^(\d+)(ум|юм)?/i
const parseOrdinalNumberPattern = /\d+/i

const matchEraPatterns = {
  narrow: /^(то м\.|м\.)/i,
  abbreviated: /^(то м\.?\s?м\.?)/i,
  wide: /^(то милод|милодӣ)/i,
}

const parseEraPatterns = {
  any: [/^т/i, /^м/i] as const,
}

const matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^[1234] см.?/i,
  wide: /^[1234](-ум|-юм)? семоҳа/i,
}

const parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i] as const,
}

const matchMonthPatterns = {
  narrow: /^[яфмасонд]/i,
  abbreviated: /^(янв|фев|март?|апр|май|июн|июл|авг|сент?|окт|нояб?|дек)/i,
  wide: /^(январ[и]|феврал[и]|март[и]|апрел[и]|ма[йи]|июн[и]|июл[и]|август[и]|сентябр[и]|октябр[и]|ноябр[и]|декабр[и])/i,
}

const parseMonthPatterns = {
  narrow: [
    /^я/i,
    /^ф/i,
    /^м/i,
    /^а/i,
    /^м/i,
    /^и/i,
    /^и/i,
    /^а/i,
    /^с/i,
    /^о/i,
    /^н/i,
    /^д/i,
  ] as const,
  any: [
    /^ян/i,
    /^ф/i,
    /^мар/i,
    /^ап/i,
    /^ма[йи]/i,
    /^июн/i,
    /^июл/i,
    /^ав/i,
    /^с/i,
    /^о/i,
    /^н/i,
    /^д/i,
  ] as const,
}

const matchDayPatterns = {
  narrow: /^[ядсчҷ]/i,
  short: /^(яш|дш|сш|чш|пш|ҷм|шб)/i,
  abbreviated: /^(яшб|дшб|сшб|чшб|пшб|ҷум|шнб)/i,
  wide: /^(якшанбе|душанбе|сешанбе|чоршанбе|панҷшанбе|ҷумъа|шанбе)/i,
}

const parseDayPatterns = {
  narrow: [/^я/i, /^д/i, /^с/i, /^ч/i, /^п/i, /^ҷ/i, /^ш/i] as const,
  any: [/^яш/i, /^дш/i, /^сш/i, /^чш/i, /^пш/i, /^ҷм/i, /^шб/i] as const,
}

const matchDayPeriodPatterns = {
  narrow: /^(a|p|н\.ш|н\.р| (субҳ|рӯз|бегоҳ|шаб))/i,
  any: /^([ap]\.?\s?m\.?|нисфи шаб|нисфи рӯз| (субҳ|рӯз|бегоҳ|шаб))/i,
}

const parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^н\.ш/i,
    noon: /^н\.р/i,
    morning: /субҳ/i,
    afternoon: /рӯз/i,
    evening: /бегоҳ/i,
    night: /шаб/i,
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
