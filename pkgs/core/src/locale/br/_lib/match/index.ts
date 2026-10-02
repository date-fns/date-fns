import type { Quarter } from "../../../../types.ts";
import type { Match } from "../../../types.ts";
import { buildMatchFn } from "../../../_lib/buildMatchFn/index.ts";
import { buildMatchPatternFn } from "../../../_lib/buildMatchPatternFn/index.ts";

const matchOrdinalNumberPattern = /^(\d+)(añ|l|e|vet)?/i;
const parseOrdinalNumberPattern = /\d+/i;

const matchEraPatterns = {
  narrow: /^(a-raok|goude) j\.?\s?k\.?/i,
  abbreviated: /^(a-raok|goude) j\.?\s?k\.?/i,
  wide: /^(a-raok|goude) (jezuz-krist|j\.?\s?k\.?)/i,
};
const parseEraPatterns = {
  any: [/^a/i, /^g/i] as const,
};

const matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^[1234](añ|l|e)? trim\.?/i,
  wide: /^[1234](añ|l|e)? trimiziad/i,
};
const parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i] as const,
};

const matchMonthPatterns = {
  narrow: /^(1[0-2]|0?[1-9])/i,
  abbreviated:
    /^(gen\.?|c[ʼ’']hwe\.?|meur\.?|ebr\.?|mae|mezh\.?|goue\.?|eost|gwen\.?|here|du|kzu\.?)/i,
  wide: /^(genver|c[ʼ’']hwevrer|meurzh|ebrel|mae|mezheven|gouere|eost|gwengolo|here|du|kerzu)/i,
};
const parseMonthPatterns = {
  narrow: [
    /^0?1$/i,
    /^0?2$/i,
    /^0?3$/i,
    /^0?4$/i,
    /^0?5$/i,
    /^0?6$/i,
    /^0?7$/i,
    /^0?8$/i,
    /^0?9$/i,
    /^10$/i,
    /^11$/i,
    /^12$/i,
  ] as const,
  any: [
    /^gen/i,
    /^c[ʼ’']h/i,
    /^meu/i,
    /^eb/i,
    /^ma/i,
    /^mez/i,
    /^gou/i,
    /^eo/i,
    /^gw/i,
    /^h/i,
    /^d/i,
    /^k/i,
  ] as const,
};

const matchDayPatterns = {
  narrow: /^(su|l|mz|mc|y|g|sa)/i,
  short: /^(sul|lun|meu\.?|mer\.?|yaou|gwe\.?|sad\.?)/i,
  abbreviated: /^(sul|lun|meu\.?|mer\.?|yaou|gwe\.?|sad\.?)/i,
  wide: /^(sul|lun|meurzh|merc[ʼ’']her|yaou|gwener|sadorn)/i,
};
const parseDayPatterns = {
  narrow: [/^su/i, /^l/i, /^mz/i, /^mc/i, /^y/i, /^g/i, /^sa/i] as const,
  any: [/^su/i, /^l/i, /^meu/i, /^mer/i, /^y/i, /^g/i, /^sa/i] as const,
};

const matchDayPeriodPatterns = {
  any: /^([ag]\.?\s?m\.?|a-raok merenn|goude merenn|hanternoz|kreisteiz|mintin|enderv|abardaez|noz)/i,
};
const parseDayPeriodPatterns = {
  any: {
    am: /^(a\.?\s?m|a-raok merenn)/i,
    pm: /^(g\.?\s?m|goude merenn)/i,
    midnight: /^hanternoz/i,
    noon: /^kreisteiz/i,
    morning: /^mintin/i,
    afternoon: /^enderv/i,
    evening: /^abardaez/i,
    night: /^noz/i,
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
