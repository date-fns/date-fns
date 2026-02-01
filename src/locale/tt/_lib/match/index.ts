import type { Quarter } from "../../../../types.ts";
import type { Match } from "../../../types.ts";
import { buildMatchFn } from "../../../_lib/buildMatchFn/index.ts";
import { buildMatchPatternFn } from "../../../_lib/buildMatchPatternFn/index.ts";

const matchOrdinalNumberPattern = /^(\d+)( нче)?/i;
const parseOrdinalNumberPattern = /\d+/i;

const matchEraPatterns = {
  narrow: /^(б\.э\.к\.|б\.э\.)/i,
  abbreviated: /^(б\.э\.к\.|б\.э\.)/i,
  wide: /^(безнең эрага кадәр|безнең эра)/i,
};
const parseEraPatterns = {
  any: [/^б\.э\.к\./i, /^б\.э\./i] as const,
};

const matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^[1234] кв\./i,
  wide: /^[1234] нче квартал/i,
};
const parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i] as const,
};

const matchMonthPatterns = {
  narrow: /^[гфмаисонд]/i,
  abbreviated:
    /^(гыйн\.|фев\.|мар\.|апр\.|май|июнь|июль|авг\.|сент\.|окт\.|нояб\.|дек\.)/i,
  wide: /^(гыйнвар|февраль|март|апрель|май|июнь|июль|август|сентябрь|октябрь|ноябрь|декабрь)/i,
};
const parseMonthPatterns = {
  narrow: [
    /^г/i,
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
    /^гы/i,
    /^ф/i,
    /^мар/i,
    /^ап/i,
    /^май/i,
    /^июн/i,
    /^июл/i,
    /^ав/i,
    /^с/i,
    /^о/i,
    /^н/i,
    /^д/i,
  ] as const,
};

const matchDayPatterns = {
  narrow: /^[ядсчпҗш]/i,
  short: /^(як|дү|сш|чә|пә|җм|шб)/i,
  abbreviated: /^(якш|дүш|сиш|чәр|пәнҗ|җом|шим)/i,
  wide: /^(якшәмбе|дүшәмбе|сишәмбе|чәршәмбе|пәнҗешәмбе|җомга|шимбә)/i,
};
const parseDayPatterns = {
  narrow: [/^я/i, /^д/i, /^с/i, /^ч/i, /^п/i, /^җ/i, /^ш/i] as const,
  any: [/^як/i, /^дү/i, /^си/i, /^ч/i, /^п/i, /^җ/i, /^ш/i] as const,
};

const matchDayPeriodPatterns = {
  narrow: /^(тк|тс|төн уртасы|төш|иртә|көндез|кич|төн)/i,
  abbreviated: /^(тк|тс|төн уртасы|төш|иртә|көндез|кич|төн)/i,
  wide: /^(тк|тс|төн уртасы|төш|иртә|көндез|кич|төн)/i,
};
const parseDayPeriodPatterns = {
  any: {
    am: /^тк/i,
    pm: /^тс/i,
    midnight: /^төн уртасы/i,
    noon: /^төш/i,
    morning: /^иртә/i,
    afternoon: /^көндез/i,
    evening: /^кич/i,
    night: /^төн/i,
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
    defaultMatchWidth: "wide",
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: "any",
  }),
};

