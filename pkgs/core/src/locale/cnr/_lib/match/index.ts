import type { Quarter } from "../../../../types.ts";
import type { Match } from "../../../types.ts";
import { buildMatchFn } from "../../../_lib/buildMatchFn/index.ts";
import { buildMatchPatternFn } from "../../../_lib/buildMatchPatternFn/index.ts";

const matchOrdinalNumberPattern = /^(\d+)\./i;
const parseOrdinalNumberPattern = /\d+/i;

const matchEraPatterns = {
  narrow: /^(p\.\s?n\.\s?e\.|n\.\s?e\.)/i,
  abbreviated: /^(p\.\s?n\.\s?e\.|n\.\s?e\.)/i,
  wide: /^(prije nove ere|nove ere)/i,
};
const parseEraPatterns = {
  any: [/^p/i, /^n/i] as const,
};

const matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^[1234]\.\s?kv\.?/i,
  wide: /^[1234]\. kvartal/i,
};
const parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i] as const,
};

const matchMonthPatterns = {
  narrow: /^(10|11|12|[123456789])\./i,
  abbreviated: /^(jan|feb|mar|apr|maj|jun|jul|avg|sep|okt|nov|dec)/i,
  wide: /^((januar|januara)|(februar|februara)|(mart|marta)|(april|aprila)|(maj|maja)|(jun|juna)|(jul|jula)|(avgust|avgusta)|(septembar|septembra)|(oktobar|oktobra)|(novembar|novembra)|(decembar|decembra))/i,
};
const parseMonthPatterns = {
  narrow: [
    /^1/i,
    /^2/i,
    /^3/i,
    /^4/i,
    /^5/i,
    /^6/i,
    /^7/i,
    /^8/i,
    /^9/i,
    /^10/i,
    /^11/i,
    /^12/i,
  ] as const,
  any: [
    /^ja/i,
    /^f/i,
    /^mar/i,
    /^ap/i,
    /^maj/i,
    /^jun/i,
    /^jul/i,
    /^avg/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i,
  ] as const,
};

const matchDayPatterns = {
  narrow: /^[npusčc]/i,
  short: /^(ned|pon|uto|sri|(čet|cet)|pet|sub)/i,
  abbreviated: /^(ned|pon|uto|sri|(čet|cet)|pet|sub)/i,
  wide: /^(nedjelja|ponedjeljak|utorak|srijeda|(četvrtak|cetvrtak)|petak|subota)/i,
};
const parseDayPatterns = {
  narrow: [/^n/i, /^p/i, /^u/i, /^s/i, /^(č|c)/i, /^p/i, /^s/i] as const,
  any: [/^n/i, /^po/i, /^u/i, /^sr/i, /^(č|c)/i, /^pe/i, /^su/i] as const,
};

const matchDayPeriodPatterns = {
  any: /^(am|pm|ponoć|ponoc|poslije podne|popodne|podne|ujutru|uveče|uvece|noću|nocu)/i,
};
const parseDayPeriodPatterns = {
  any: {
    am: /^am/i,
    pm: /^pm/i,
    midnight: /^pono/i,
    noon: /^podne/i,
    morning: /^ujutru/i,
    afternoon: /^(poslije\s?podne|popodne)/i,
    evening: /^uve/i,
    night: /^no/i,
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
