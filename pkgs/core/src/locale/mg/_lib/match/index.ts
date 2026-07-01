import type { Quarter } from "../../../../types.js";
import type { Match } from "../../../types.js";
import { buildMatchFn } from "../../../_lib/buildMatchFn/index.js";
import { buildMatchPatternFn } from "../../../_lib/buildMatchPatternFn/index.js";

const matchOrdinalNumberPattern = /^(voalohany|(faha-)\d+)/i;
const parseOrdinalNumberPattern = /^(voalohany|(faha-)\d+)/i;

const matchEraPatterns = {
  narrow: /^(tal\.\sJ\.-K|tao\.\sJ\.-K)/i,
  abbreviated: /^(tal\.\sJ\.-K|tao\.\sJ\.-K)/i,
  wide: /^(talohan'ny Jesoa Kristy|taorian'ny Jesoa Kristy)/i,
};
const parseEraPatterns = {
  any: [/^tal/i, /^tao/i] as const,
};

const matchQuarterPatterns = {
  narrow: /^T?[1234]/i,
  abbreviated: /^tel\.?\s(voalohany|faha-[234])/i,
  wide: /^telovolana\s(voalohany|faha-[234])/i,
};
const parseQuarterPatterns = {
  any: [/1|voalohany/i, /2/i, /3/i, /4/i] as const,
};

const matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jona|jolay|aog|sept|okt|nov|des)\.?/i,
  wide: /^(janoary|febroary|martsa|aprily|may|jona|jolay|aogositra|septambra|oktobra|novambra|desambra)/i,
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
    /^mar/i,
    /^apr/i,
    /^may/i,
    /^jona/i,
    /^jol/i,
    /^aog/i,
    /^sep/i,
    /^okt/i,
    /^nov/i,
    /^des/i,
  ] as const,
};

const matchDayPatterns = {
  narrow: /^[atzs]/i,
  short: /^(ah|at|ta|ar|ak|zo|sa)/i,
  abbreviated: /^(alah|alat|tal|alar|alak|zom|sab)\.?/i,
  wide: /^(alahady|alatsinainy|talata|alarobia|alakamisy|zoma|sabotsy)/i,
};
const parseDayPatterns = {
  narrow: [/^a/i, /^a/i, /^t/i, /^a/i, /^a/i, /^z/i, /^s/i] as const,
  any: [
    /^alah/i,
    /^alat/i,
    /^tal/i,
    /^alar/i,
    /^alak/i,
    /^zo/i,
    /^sab/i,
  ] as const,
};

const matchDayPeriodPatterns = {
  narrow: /^(am|pm|s\.a\.?|mit\.v\.?|mar\.?|tol\.?|har\.?|al\.?)/i,
  any: /^(am|pm|sasak'alina|mitatao vovonana|maraina|tolak'andro|hariva|alina)/i,
};
const parseDayPeriodPatterns = {
  any: {
    am: /^am/i,
    pm: /^pm/i,
    midnight: /^(s\.a|sasak)/i,
    noon: /^(mit|mitatao)/i,
    morning: /^(mar\.|maraina)/i,
    afternoon: /^(tol)/i,
    evening: /^(har)/i,
    night: /^(al\.|alina)/i,
  },
};

export const match: Match = {
  ordinalNumber: buildMatchPatternFn({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: (value) => parseInt(value),
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
