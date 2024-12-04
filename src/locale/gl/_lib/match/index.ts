import type { Quarter } from "../../../../types.js";
import type { Match } from "../../../types.js";
import { buildMatchFn } from "../../../_lib/buildMatchFn/index.js";
import { buildMatchPatternFn } from "../../../_lib/buildMatchPatternFn/index.js";

const matchOrdinalNumberPattern = /^(\d+)(º)?/i;
const parseOrdinalNumberPattern = /\d+/i;

const matchEraPatterns = {
  narrow: /^(ac|dc|a|d)/i,
  abbreviated: /^(a\.?\s?c\.?|a\.?\s?e\.?\s?c\.?|d\.?\s?c\.?|e\.?\s?c\.?)/i,
  wide: /^(antes de cristo|antes da era com[uú]n|despois de cristo|era com[uú]n)/i,
};
const parseEraPatterns = {
  any: [/^ac/i, /^dc/i] as const,
  wide: [
    /^(antes de cristo|antes da era com[uú]n)/i,
    /^(despois de cristo|era com[uú]n)/i,
  ] as const,
};

const matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^T[1234]/i,
  wide: /^[1234](º)? trimestre/i,
};
const parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i] as const,
};

const matchMonthPatterns = {
  narrow: /^[xfmasond]/i,
  abbreviated: /^(xan|feb|mar|abr|mai|xun|xul|ago|set|out|nov|dec)/i,
  wide: /^(xaneiro|febreiro|marzo|abril|maio|xuño|xullo|agosto|setembro|outubro|novembro|decembro)/i,
};
const parseMonthPatterns = {
  narrow: [
    /^x/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^x/i,
    /^x/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i,
  ] as const,
  any: [
    /^xan/i,
    /^feb/i,
    /^mar/i,
    /^abr/i,
    /^mai/i,
    /^xun/i,
    /^xul/i,
    /^ago/i,
    /^set/i,
    /^out/i,
    /^nov/i,
    /^dec/i,
  ] as const,
};

const matchDayPatterns = {
  narrow: /^[dlmxvs]/i,
  short: /^(do|lu|ma|me|xo|ve|sa)/i,
  abbreviated: /^(dom|lun|mar|mer|xov|ven|sab)/i,
  wide: /^(domingo|luns|martes|m[eé]rcores|xoves|venres|s[áa]bado)/i,
};
const parseDayPatterns = {
  narrow: [/^d/i, /^l/i, /^m/i, /^m/i, /^x/i, /^v/i, /^s/i] as const,
  any: [/^do/i, /^lu/i, /^ma/i, /^me/i, /^xo/i, /^ve/i, /^sa/i] as const,
};

const matchDayPeriodPatterns = {
  narrow: /^(a|p|mn|md|(da|[aá]s) (mañ[aá]|tarde|noite))/i,
  any: /^([ap]\.?\s?m\.?|medianoite|mediod[ií]a|(da|[aá]s) (mañ[aá]|tarde|noite))/i,
};
const parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mn/i,
    noon: /^md/i,
    morning: /mañ[aá]/i,
    afternoon: /tarde/i,
    evening: /tardiña/i,
    night: /noite/i,
  },
};

export const match: Match = {
  ordinalNumber: buildMatchPatternFn({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: (value) => parseInt(value, 10),
  }),

  era: buildMatchFn({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseEraPatterns,
    defaultParseWidth: "any",
  }),

  quarter: buildMatchFn({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: "any",
    valueCallback: (index) => (index + 1) as Quarter,
  }),

  month: buildMatchFn({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: "any",
  }),

  day: buildMatchFn({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseDayPatterns,
    defaultParseWidth: "any",
  }),

  dayPeriod: buildMatchFn({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: "any",
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: "any",
  }),
};
