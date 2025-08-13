import type { Quarter } from "../../../../types.js";
import type { Match } from "../../../types.js";
import { buildMatchFn } from "../../../_lib/buildMatchFn/index.js";
import { buildMatchPatternFn } from "../../../_lib/buildMatchPatternFn/index.js";

const matchOrdinalNumberPattern = /^(\d+)(-?(ум|юм))?/i;
const parseOrdinalNumberPattern = /\d+/i;

const matchEraPatterns = {
  narrow: /^(т\.?\s?м\.?|м\.?)/i,
  abbreviated: /^(то милод|милодӣ)/i,
  wide: /^(то милод|милодӣ)/i,
};
const parseEraPatterns = {
  any: [/^т/i, /^м/i] as const,
};

const matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^[1234](-?(ум|юм))? ч.?/i,
  wide: /^[1234](-?(ум|юм))? чоряк/i,
};

const parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i] as const,
};

const matchMonthPatterns = {
  narrow: /^[яфмамииасонд]/i,
  abbreviated:
    /^(янв|фев|мар|апр|май|июн|июл|авг|сен|окт|ноя|дек)\.?/i,
  wide: /^(январ|феврал|март|апрел|май|июн|июл|август|сентябр|октябр|ноябр|декабр)/i,
};

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
  abbreviated: [
    /^янв/i,
    /^фев/i,
    /^мар/i,
    /^апр/i,
    /^май/i,
    /^июн/i,
    /^июл/i,
    /^авг/i,
    /^сен/i,
    /^окт/i,
    /^ноя/i,
    /^дек/i,
  ] as const,
  any: [
    /^я/i,
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
  narrow: /^[ядсчпҷш]/i,
  short: /^(якш|дш|сш|чш|пш|ҷм|шб)\.?/i,
  wide: /^(якшанбе|душанбе|сешанбе|чоршанбе|панҷшанбе|ҷумъа|шанбе)/i,
};

const parseDayPatterns = {
  narrow: [/^я/i, /^д/i, /^с/i, /^ч/i, /^п/i, /^ҷ/i, /^ш/i] as const,
  short: [/^якш/i, /^дш/i, /^сш/i, /^чш/i, /^пш/i, /^ҷм/i, /^шб/i] as const,
  any: [
    /^як/i,
    /^ду/i,
    /^се/i,
    /^чо/i,
    /^пан/i,
    /^ҷум/i,
    /^ша/i,
  ] as const,
};

const matchDayPeriodPatterns = {
  narrow:
    /^ТО|ТК|нимшаб(ро)?|пешин(ро)?|суб(ҳро)?|рӯз(ро)?|бегоҳ(ро)?|шаб(ро)?/i,
  abbreviated:
    /^ТО|ТК|нимшаб(ро)?|пешин(ро)?|суб(ҳро)?|рӯз(ро)?|бегоҳ(ро)?|шаб(ро)?/i,
  wide: /^ТО|ТК|нимшаб(ро)?|пешин(ро)?|суб(ҳро)?|рӯз(ро)?|бегоҳ(ро)?|шаб(ро)?/i,
};

const parseDayPeriodPatterns = {
  any: {
    am: /^ТО/i,
    pm: /^ТК/i,
    midnight: /^нимшаб/i,
    noon: /^пешин/i,
    morning: /^суб/i,
    afternoon: /^рӯз/i,
    evening: /^бегоҳ/i,
    night: /^шаб/i,
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
