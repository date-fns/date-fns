import type { Quarter } from "../../../../types.ts";
import type { Match } from "../../../types.ts";
import { buildMatchFn } from "../../../_lib/buildMatchFn/index.ts";
import { buildMatchPatternFn } from "../../../_lib/buildMatchPatternFn/index.ts";

const matchOrdinalNumberPattern = /^(faha-)?\d+/i;
const parseOrdinalNumberPattern = /\d+/i;

const matchEraPatterns = {
  narrow: /^(bc|ad)/i,
  abbreviated: /^(bce|bc|ce|ad)/i,
  wide: /^(Alohan['’]i JK|Aorian['’]i JK)/i,
};

const parseEraPatterns = {
  any: [/^(bce|bc|alohan['’]i)/i, /^(ce|ad|aorian['’]i)/i] as const,
};

const matchQuarterPatterns = {
  narrow: /^[1-4]/i,
  abbreviated: /^T[1-4]/i,
  wide: /^Telovolana (voalohany|faharoa|fahatelo|fahefatra)/i,
};

const parseQuarterPatterns = {
  any: [
    /^(1|T1|Telovolana voalohany)/i,
    /^(2|T2|Telovolana faharoa)/i,
    /^(3|T3|Telovolana fahatelo)/i,
    /^(4|T4|Telovolana fahefatra)/i,
  ] as const,
};

const matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(Jan|Feb|Mar|Apr|Mey|Jon|Jol|Aog|Sep|Okt|Nov|Des)\.?/i,
  wide: /^(Janoary|Febroary|Martsa|Aprily|Mey|Jona|Jolay|Aogositra|Septambra|Oktobra|Novambra|Desambra)/i,
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
    /^mey/i,
    /^jon/i,
    /^jol/i,
    /^aog/i,
    /^sep/i,
    /^okt/i,
    /^nov/i,
    /^des/i,
  ] as const,
};

const matchDayPatterns = {
  narrow: /^[atz]/i,
  short: /^(Alah|Alats|Tal|Alar|Alak|Zom|Asab)\.?/i,
  abbreviated: /^(Alah|Alats|Tal|Alar|Alak|Zom|Asab)\.?/i,
  wide: /^(Alahady|Alatsinainy|Talata|Alarobia|Alakamisy|Zoma|Asabotsy)/i,
};

const parseDayPatterns = {
  narrow: [/^a/i, /^a/i, /^t/i, /^a/i, /^a/i, /^z/i, /^a/i] as const,

  any: [
    /^alah/i,
    /^alats/i,
    /^tal/i,
    /^alar/i,
    /^alak/i,
    /^zom/i,
    /^asab/i,
  ] as const,
};

const matchDayPeriodPatterns = {
  narrow: /^(am|pm)/i,
  any: /^(a\.?m\.?|p\.?m\.?)/i,
};

const parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^(?!)/,
    noon: /^(?!)/,
    morning: /^(?!)/,
    afternoon: /^(?!)/,
    evening: /^(?!)/,
    night: /^(?!)/,
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
