import type { Quarter } from "../../../../types.js";
import type { Match } from "../../../types.js";
import { buildMatchFn } from "../../../_lib/buildMatchFn/index.js";
import { buildMatchPatternFn } from "../../../_lib/buildMatchPatternFn/index.js";

const matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
const parseOrdinalNumberPattern = /\d+/i;

const matchEraPatterns = {
  narrow: /^(b|a)/i,
  abbreviated: /^(bc|ad)/i,
  wide: /^(bago si kristo|anno domini)/i,
};

const parseEraPatterns = {
  any: [/^b/i, /^a/i] as const,
};

const matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](st|nd|rd|th)? quarter/i,
};

const parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i] as const,
};

const matchMonthPatterns = {
  narrow: /^[efmasond]/i,
  abbreviated: /^(ene|peb|mar|abr|may|hun|hul|ago|set|okt|nob|dis)/i,
  wide: /^(enero|pebrero|marso|abril|mayo|hunyo|hulyo|agosto|setyembre|oktubre|nobyembre|disyembre)/i,
};

const parseMonthPatterns = {
  narrow: [
    /^e/i,
    /^p/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^h/i,
    /^h/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i,
  ] as const,
  any: [
    /^ene/i,
    /^peb/i,
    /^mar/i,
    /^abr/i,
    /^may/i,
    /^hun/i,
    /^hul/i,
    /^ago/i,
    /^set/i,
    /^okt/i,
    /^nob/i,
    /^dis/i,
  ] as const,
};

const matchDayPatterns = {
  narrow: /^[lmjhb]/i,
  short: /^(li|lu|ma|mi|hu|bi|sa)/i,
  abbreviated: /^(linggo|lunes|martes|miyerkules|huwebes|biyernes|sabado)/i,
  wide: /^(linggo|lunes|martes|miyerkules|huwebes|biyernes|sabado)/i,
};

const parseDayPatterns = {
  narrow: [/^l/i, /^l/i, /^m/i, /^m/i, /^h/i, /^b/i, /^s/i] as const,
  any: [/^li/i, /^lu/i, /^ma/i, /^mi/i, /^hu/i, /^bi/i, /^sa/i] as const,
};

const matchDayPeriodPatterns = {
  narrow: /^(a|p|mi|n|umaga|hapon|gabi)/i,
  any: /^(am|pm|hatinggabi|tanghali|umaga|hapon|gabi)/i,
};

const parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^tn/i,
    morning: /umaga/i,
    afternoon: /hapon/i,
    evening: /gabi/i,
    night: /gabi/i,
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
