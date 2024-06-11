import type { Quarter } from "../../../../types.js";
import type { Match } from "../../../types.js";
import { buildMatchFn } from "../../../_lib/buildMatchFn/index.js";
import { buildMatchPatternFn } from "../../../_lib/buildMatchPatternFn/index.js";

const matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
const parseOrdinalNumberPattern = /\d+/i;

const matchEraPatterns = {
  narrow: /^(k|b)/i,
  abbreviated: /^(kk|bk)/i,
  wide: /^(kabla ya kristo|baada ya kristo)/i,
};
const parseEraPatterns = {
  any: [/^k/i, /^b/i] as const,
};

const matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^r[1234]/i,
  wide: /^[1234] robo/i,
};
const parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i] as const,
};

const matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mac|apr|mei|jun|jul|ago|sep|okt|nov|des)/i,
  wide: /^(januari|februari|machi|aprili|mei|juni|julai|agosti|septemba|oktoba|novemba|desemba)/i,
};
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
    /^jan/i,
    /^feb/i,
    /^mac/i,
    /^apr/i,
    /^mei/i,
    /^jun/i,
    /^jul/i,
    /^ago/i,
    /^sep/i,
    /^okt/i,
    /^nov/i,
    /^des/i,
  ] as const,
};

const matchDayPatterns = {
  narrow: /^[jmasi]/i,
  short: /^(jp|jt|jn|jt|a|ij|jm)/i,
  abbreviated:
    /^(jumapili|jumatatu|jumanne|jumatano|alhamisi|ijumaa|jumamosi)/i,
  wide: /^(jumapili|jumatatu|jumanne|jumatano|alhamisi|ijumaa|jumamosi)/i,
};
const parseDayPatterns = {
  narrow: [/^j/i, /^j/i, /^j/i, /^j/i, /^a/i, /^i/i, /^j/i] as const,
  any: [/^jp/i, /^jt/i, /^jn/i, /^jt/i, /^a/i, /^ij/i, /^jm/i] as const,
};

const matchDayPeriodPatterns = {
  narrow: /^(a|p|mn|md|asubuhi|mchana|jioni|usiku)/i,
  any: /^(am|pm|saa sita usiku|saa sita mchana|asubuhi|mchana|jioni|usiku)/i,
};
const parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mn/i,
    noon: /^md/i,
    morning: /asubuhi/i,
    afternoon: /mchana/i,
    evening: /jioni/i,
    night: /usiku/i,
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
