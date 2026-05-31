import type { Quarter } from "../../../../types.ts";
import type { Match } from "../../../types.ts";
import { buildMatchFn } from "../../../_lib/buildMatchFn/index.ts";
import { buildMatchPatternFn } from "../../../_lib/buildMatchPatternFn/index.ts";

const matchOrdinalNumberPattern =
  /^(\d+)(-?(инчи|ынчы|унчу|үнчү|нчы|чи|чы|чу|чү)|-)?/i;
const parseOrdinalNumberPattern = /\d+/i;

const matchEraPatterns = {
  narrow: /^(б\.?\s?з\.?\s?ч\.?|б\.?\s?з\.?)/i,
  abbreviated: /^(б\.?\s?з\.?\s?ч\.?|б\.?\s?з\.?)/i,
  wide: /^(биздин заманга чейин|биздин заман)/i,
};
const parseEraPatterns = {
  any: [/^(б\.?\s?з\.?\s?ч\.?|биздин заманга чейин)/i, /^б/i] as const,
};

const matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^[1234]-(чей\.?|ч\.?)/i,
  wide: /^[1234]-чейрек/i,
};
const parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i] as const,
};

const matchMonthPatterns = {
  narrow: /^[яфмаисонд]/i,
  abbreviated:
    /^(янв\.?|фев\.?|мар\.?|апр\.?|май|июн\.?|июл\.?|авг\.?|сен\.?|окт\.?|ноя\.?|дек\.?)/i,
  wide: /^(январь|февраль|март|апрель|май|июнь|июль|август|сентябрь|октябрь|ноябрь|декабрь)/i,
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
  narrow: /^[ждшби]/i,
  short: /^(жш\.?|дш\.?|шш\.?|шр\.?|бш\.?|жм\.?|иш\.?)/i,
  abbreviated: /^(жек\.?|дүй\.?|шейш\.?|шарш\.?|бейш\.?|жума|ишм\.?)/i,
  wide: /^(жекшемби|дүйшөмбү|шейшемби|шаршемби|бейшемби|жума|ишемби)/i,
};
const parseDayPatterns = {
  narrow: [/^ж/i, /^д/i, /^ш/i, /^ш/i, /^б/i, /^ж/i, /^и/i] as const,
  any: [
    /^(жек|жш)/i,
    /^(дүй|дш)/i,
    /^(шей|шш)/i,
    /^(шар|шр)/i,
    /^(бей|бш)/i,
    /^(жума|жм)/i,
    /^(иш|ишм)/i,
  ] as const,
};

const matchDayPeriodPatterns = {
  any: /^(таңкы|тң|түштөн кийинки|тк|түн ортосу|түн орт|чак түш|чт|эртең менен|эртң мн|түштөн кийин|түшт кйн|кечинде|кечкурун|кечк|түн ичинде|түн)/i,
};
const parseDayPeriodPatterns = {
  any: {
    am: /^(таңкы|тң)/i,
    pm: /^(түштөн кийинки|тк)/i,
    midnight: /^түн орт/i,
    noon: /^(чак түш|чт)/i,
    morning: /^(эртең|эртң мн)/i,
    afternoon: /^(түштөн кийин|түшт кйн)/i,
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
    defaultMatchWidth: "any",
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: "any",
  }),
};
