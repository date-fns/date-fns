import type { Quarter } from "../../../../types.ts";
import type { Match } from "../../../types.ts";
import { buildMatchFn } from "../../../_lib/buildMatchFn/index.ts";
import { buildMatchPatternFn } from "../../../_lib/buildMatchPatternFn/index.ts";

const matchOrdinalNumberPattern = /^(faha-)?\d+/i;
const parseOrdinalNumberPattern = /\d+/i;

const matchEraPatterns = {
  narrow: /^(bc|ad)/i,
  abbreviated: /^(bc|ad)/i,
  wide: /^(alohan'i kristy|aorian'i kristy)/i,
};
const parseEraPatterns = {
  any: [/^al/i, /^ao/i] as const,
};

const matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^t[1234]/i,
  wide: /^telovolana faha-?[1234]/i,
};
const parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i] as const,
};

const matchMonthPatterns = {
  narrow: /^[jfmasonod]/i,
  abbreviated: /^(jan|feb|mar|apr|mey|jon|jol|aog|sep|okt|nov|des)/i,
  wide: /^(janoary|febroary|martsa|aprily|mey|jona|jolay|aogositra|septambra|oktobra|novambra|desambra)/i,
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
    /^f/i,
    /^mar/i,
    /^ap/i,
    /^mey/i,
    /^jon/i,
    /^jol/i,
    /^aog/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i,
  ] as const,
};

const matchDayPatterns = {
  narrow: /^[atz]/i,
  short: /^(ah|at|ta|ar|ak|zo|as)/i,
  abbreviated: /^(alh|alt|tal|ala|alk|zom|asb)/i,
  wide: /^(alahady|alatsinainy|talata|alarobia|alakamisy|zoma|asabotsy)/i,
};
const parseDayPatterns = {
  narrow: [/^a/i, /^a/i, /^t/i, /^a/i, /^a/i, /^z/i, /^a/i] as const,
  any: [/^alh|^ah/i, /^alt|^at/i, /^tal|^ta/i, /^ala|^ar/i, /^alk|^ak/i, /^zom|^zo/i, /^asb|^as/i] as const,
};

const matchDayPeriodPatterns = {
  narrow: /^(am|pm|misasakalina|mitataovovonana|maraina|tolakandro|hariva|alina)/i,
  any: /^(am|pm|misasakalina|mitataovovonana|maraina|tolakandro|hariva|alina)/i,
};
const parseDayPeriodPatterns = {
  any: {
    am: /^am/i,
    pm: /^pm/i,
    midnight: /^misasakalina/i,
    noon: /^mitataovovonana/i,
    morning: /^maraina/i,
    afternoon: /^tolakandro/i,
    evening: /^hariva/i,
    night: /^alina/i,
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
