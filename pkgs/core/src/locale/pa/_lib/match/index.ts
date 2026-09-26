import type { Quarter } from "../../../../types.ts";
import type { Match } from "../../../types.ts";
import { buildMatchFn } from "../../../_lib/buildMatchFn/index.ts";
import { buildMatchPatternFn } from "../../../_lib/buildMatchPatternFn/index.ts";

const matchOrdinalNumberPattern = /^(\d+)/i;
const parseOrdinalNumberPattern = /\d+/i;

const matchEraPatterns = {
  narrow: /^(ਈ\.ਪੂ\.|ਸੰਨ)/i,
  abbreviated: /^(ਈ\.\s?ਪੂ\.|ਸੰਨ)/i,
  wide: /^(ਈਸਵੀ ਪੂਰਵ|ਈਸਵੀ ਸੰਨ)/i,
};
const parseEraPatterns = {
  any: [/ਪੂ/i, /ਸੰਨ/i] as const,
};

const matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^ਤਿਮਾਹੀ[1234]/i,
  wide: /^(ਪਹਿਲੀ|ਦੂਜੀ|ਤੀਜੀ|ਚੌਥੀ) ਤਿਮਾਹੀ/i,
};
const parseQuarterPatterns = {
  any: [/(1|ਪਹਿਲੀ)/i, /(2|ਦੂਜੀ)/i, /(3|ਤੀਜੀ)/i, /(4|ਚੌਥੀ)/i] as const,
};

const matchMonthPatterns = {
  // eslint-disable-next-line no-misleading-character-class
  narrow: /^[ਜਫ਼ਮਾਅਜੂਜੁਸਨਦ]/i,
  abbreviated: /^(ਜਨ|ਫ਼ਰ|ਮਾਰਚ|ਅਪ੍ਰੈ|ਮਈ|ਜੂਨ|ਜੁਲਾ|ਅਗ|ਸਤੰ|ਅਕਤੂ|ਨਵੰ|ਦਸੰ)/i,
  wide: /^(ਜਨਵਰੀ|ਫ਼ਰਵਰੀ|ਮਾਰਚ|ਅਪ੍ਰੈਲ|ਮਈ|ਜੂਨ|ਜੁਲਾਈ|ਅਗਸਤ|ਸਤੰਬਰ|ਅਕਤੂਬਰ|ਨਵੰਬਰ|ਦਸੰਬਰ)/i,
};
const parseMonthPatterns = {
  narrow: [
    /^ਜ/i,
    /^ਫ਼/i,
    /^ਮਾ/i,
    /^ਅ/i,
    /^ਮ/i,
    /^ਜੂ/i,
    /^ਜੁ/i,
    /^ਅ/i,
    /^ਸ/i,
    /^ਅ/i,
    /^ਨ/i,
    /^ਦ/i,
  ] as const,
  any: [
    /^ਜਨ/i,
    /^ਫ਼/i,
    /^ਮਾ/i,
    /^ਅਪ/i,
    /^ਮਈ/i,
    /^ਜੂ/i,
    /^ਜੁ/i,
    /^ਅਗ/i,
    /^ਸ/i,
    /^ਅਕ/i,
    /^ਨ/i,
    /^ਦ/i,
  ] as const,
};

const matchDayPatterns = {
  // eslint-disable-next-line no-misleading-character-class
  narrow: /^(ਐ|ਸੋ|ਮੰ|ਬੁੱ|ਵੀ|ਸ਼ੁੱ|ਸ਼)/i,
  short: /^(ਐਤ|ਸੋਮ|ਮੰਗ|ਬੁੱਧ|ਵੀਰ|ਸ਼ੁੱਕ|ਸ਼ਨੀ)/i,
  abbreviated: /^(ਐਤ|ਸੋਮ|ਮੰਗਲ|ਬੁੱਧ|ਵੀਰ|ਸ਼ੁੱਕਰ|ਸ਼ਨੀ)/i,
  wide: /^(ਐਤਵਾਰ|ਸੋਮਵਾਰ|ਮੰਗਲਵਾਰ|ਬੁੱਧਵਾਰ|ਵੀਰਵਾਰ|ਸ਼ੁੱਕਰਵਾਰ|ਸ਼ਨੀਵਾਰ)/i,
};
const parseDayPatterns = {
  any: [/^ਐ/i, /^ਸੋ/i, /^ਮੰ/i, /^ਬੁੱ/i, /^ਵੀ/i, /^ਸ਼ੁ/i, /^ਸ਼ਨ/i] as const,
};

const matchDayPeriodPatterns = {
  narrow: /^(AM|PM|ਅੱਧੀ ਰਾਤ|ਦੁਪਹਿਰੇ|ਦੁਪਹਿਰ|ਸਵੇਰੇ|ਸ਼ਾਮੀਂ|ਸ਼ਾਮ|ਰਾਤੀਂ|ਰਾਤ)/i,
  any: /^(AM|PM|ਅੱਧੀ ਰਾਤ|ਦੁਪਹਿਰੇ|ਦੁਪਹਿਰ|ਸਵੇਰੇ|ਸ਼ਾਮੀਂ|ਸ਼ਾਮ|ਰਾਤੀਂ|ਰਾਤ)/i,
};
const parseDayPeriodPatterns = {
  any: {
    am: /^AM/i,
    pm: /^PM/i,
    midnight: /^ਅੱਧੀ/i,
    noon: /^ਦੁਪਹਿਰ$/i,
    morning: /ਸਵੇਰ/i,
    afternoon: /ਦੁਪਹਿਰੇ/i,
    evening: /ਸ਼ਾਮ/i,
    night: /ਰਾਤ/i,
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
