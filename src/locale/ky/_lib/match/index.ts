import type { Quarter } from "../../../../types.js";
import type { Match } from "../../../types.js";
import { buildMatchFn } from "../../../_lib/buildMatchFn/index.js";
import { buildMatchPatternFn } from "../../../_lib/buildMatchPatternFn/index.js";

const matchOrdinalNumberPattern = /^(\d+)(-?(чу|чи|чы))?/i;
const parseOrdinalNumberPattern = /\d+/i;

const matchEraPatterns = {
  narrow: /^(б\.?\s?з\.?\s?ч?\.?)/i,
  abbreviated: /^(б\.?\s?з\.?\s?ч?\.?)/i,
  wide: /^(биздин заманга чейин|биздин замандын|биздин заман)/i,
};
const parseEraPatterns = {
  any: [/^б/i, /^з/i] as const,
};

const matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^[1234](-?(чи|чү))? кв.?/i,
  wide: /^[1234](-?(чи|чү))? квартал/i,
};

const parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i] as const,
};

const matchMonthPatterns = {
  narrow: /^[үбжчгктбатжб]/i,
  abbreviated:
    /^(үч|үан|бир|бан|жак|жкн|чык|чкн|бугу|бгн|кулжа|клн|теке|ткн|бао|бон|аяо|аон|тог|тан|жет|жан|беш|бшн)\.?/i,
  wide: /^(үчтүн айы(нын)?|бирдин айы(нын)?|жалган куран(дын)?|чын куран(дын)?|бугу(нун)?|кулжа(нын)?|теке(нин)?|баш оона(нын)?|аяк оона(нын)?|тогуздун айы(нын)?|жетинин айы(нын)?|бештин айы(нын)?)/i,
};

const parseMonthPatterns = {
  narrow: [
    /^ү/i,
    /^б/i,
    /^ж/i,
    /^ч/i,
    /^г/i,
    /^к/i,
    /^т/i,
    /^б/i,
    /^а/i,
    /^т/i,
    /^ж/i,
    /^б/i,
  ] as const,
  abbreviated: [
    /^(үч|үан)/i,
    /^(бир|бан)/i,
    /^(жак|жкн)/i,
    /^(чык|чкн)/i,
    /^(бугу|бгн)/i,
    /^(кулжа|клн)/i,
    /^(теке|ткн)/i,
    /^(бао|бон)/i,
    /^(аяо|аон)/i,
    /^(тог|тан)/i,
    /^(жет|жан)/i,
    /^(беш|бшн)/i,
  ] as const,
  any: [
    /^ү/i,
    /^б/i,
    /^ж/i,
    /^ч/i,
    /^г/i,
    /^к/i,
    /^т/i,
    /^б/i,
    /^а/i,
    /^т/i,
    /^ж/i,
    /^б/i,
  ] as const,
};

const matchDayPatterns = {
  narrow: /^(ж|д|ш|ш|б|ж|и)/i,
  short: /^(жш|дш|шш|шр|бш|жм|иш|)\.?/i,
  wide: /^(жекшемби(де)?|дүйшөмбү(дө)?|шейшемби(де)?|шаршемби(де)?|бейшемби(де)?|жума(да)?|ишемби(де)?)/i,
};

const parseDayPatterns = {
  narrow: [/^ж/i, /^д/i, /^ш/i, /^ш/i, /^б/i, /^ж/i, /^и/i] as const,
  short: [/^жш/i, /^дш/i, /^шш/i, /^шр/i, /^бш/i, /^жм/i, /^иш/i] as const,
  any: [
    /^ж[ек]/i,
    /^д[уй]/i,
    /^ш[ей]/i,
    /^ш[ар]/i,
    /^б[ей]/i,
    /^ж[ум]/i,
    /^и[ше]/i,
  ] as const,
};

const matchDayPeriodPatterns = {
  narrow:
    /^Т\.?\s?[ЧК]\.?|түн ортосун?|түш(тү)?|таң(ды)?|күндүз(дү)?|кеч(ти)?|түн(дү)?/i,
  abbreviated:
    /^Т\.?\s?[ЧК]\.?|түн ортосун?|түш(тү)?|таң(ды)?|күндүз(дү)?|кеч(ти)?|түн(дү)?/i,
  wide: /^Т\.?\s?[ЧК]\.?|түн ортосун?|түш(тү)?|таң(ды)?|күндүз(дү)?|кеч(ти)?|түн(дү)?/i,
};

const parseDayPeriodPatterns = {
  any: {
    am: /^ТЧ/i,
    pm: /^ТК/i,
    midnight: /^түн ортосу/i,
    noon: /^түш/i,
    morning: /^таң/i,
    afternoon: /^күндүз/i,
    evening: /^кеч/i,
    night: /^түн/i,
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
