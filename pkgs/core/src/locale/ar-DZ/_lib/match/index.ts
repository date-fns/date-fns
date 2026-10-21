import { buildMatchPatternFn } from "../../../_lib/buildMatchPatternFn/index.ts";
import { buildMatchFn } from "../../../_lib/buildMatchFn/index.ts";
import type { Quarter } from "../../../../types.ts";
import type { Match } from "../../../types.ts";

const matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
const parseOrdinalNumberPattern = /\d+/i;

const matchEraPatterns = {
  narrow: /^(ق|ب)/i,
  abbreviated: /^(ق\.?\s?م\.?|ق\.?\s?م\.?\s?|a\.?\s?d\.?|c\.?\s?)/i,
  wide: /^(قبل الميلاد|قبل الميلاد|بعد الميلاد|بعد الميلاد)/i,
};
const parseEraPatterns = {
  any: [/^قبل/i, /^بعد/i] as const,
};

const matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^ر[1234]/i,
  wide: /^الربع [1234]/i,
};
const parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i] as const,
};

const matchMonthPatterns = {
  narrow: /^[جفمأسند]/i,
  abbreviated:
    /^(جانـ?|فيفـ?|مارس|أفريل|مايـ?|جوانـ?|جويـ?|أوت|سبتـ?|أكتـ?|نوفـ?|ديسـ?|جان|فيف|مار|أفر|ماي|جوا|جوي|سبت|أكت|نوف|ديس)/i,
  wide: /^(جانفي|فيفري|مارس|أفريل|ماي|جوان|جويلية|أوت|سبتمبر|أكتوبر|نوفمبر|ديسمبر)/i,
};

const parseMonthPatterns = {
  narrow: [
    /^ج/i,
    /^ف/i,
    /^م/i,
    /^أ/i,
    /^م/i,
    /^ج/i,
    /^ج/i,
    /^أ/i,
    /^س/i,
    /^أ/i,
    /^ن/i,
    /^د/i,
  ] as const,
  any: [
    /^جان/i,
    /^فيف/i,
    /^مار/i,
    /^أفر/i,
    /^ماي/i,
    /^جوا/i,
    /^جوي/i,
    /^أوت/i,
    /^سبت/i,
    /^أكت/i,
    /^نوف/i,
    /^ديس/i,
  ] as const,
};

const matchDayPatterns = {
  narrow: /^[حنثرخجس]/i,
  short: /^(أحد|اثنين|ثلاثاء|أربعاء|خميس|جمعة|سبت)/i,
  abbreviated: /^(أحد|اثنـ?|ثلا|أربـ?|خميـ?|جمعة|سبت)/i,
  wide: /^(الأحد|الاثنين|الثلاثاء|الأربعاء|الخميس|الجمعة|السبت)/i,
};
const parseDayPatterns = {
  narrow: [/^ح/i, /^ن/i, /^ث/i, /^ر/i, /^خ/i, /^ج/i, /^س/i] as const,
  wide: [
    /^الأحد/i,
    /^الاثنين/i,
    /^الثلاثاء/i,
    /^الأربعاء/i,
    /^الخميس/i,
    /^الجمعة/i,
    /^السبت/i,
  ] as const,
  any: [/^أح/i, /^اث/i, /^ث/i, /^أر/i, /^خ/i, /^ج/i, /^س/i] as const,
};

const matchDayPeriodPatterns = {
  narrow:
    /^(نصف الليل|ن|ظهر|ظ|في الصباح|صباحاً|بعد الظـ?هر|في المساء|مساءاً|في الليل|ليلاً|ص|م|a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^(نصف الليل|ن|ظهر|ظ|في الصباح|صباحاً|بعد الظـ?هر|في المساء|مساءاً|في الليل|ليلاً|ص|م|[ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i,
};
const parseDayPeriodPatterns = {
  any: {
    am: /^(ص$|a)/i,
    pm: /^(م$|p)/i,
    midnight: /^((ن|نصف الليل)$|mi)/i,
    noon: /^((ظ|ظهر)$|no)/i,
    morning: /^(في الصباح|صباحاً)$|morning/i,
    afternoon: /^بعد الظـ?هر$|afternoon/i,
    evening: /^(في المساء|مساءاً)$|evening/i,
    night: /^(في الليل|ليلاً)$|night/i,
  },
};

export const match: Match = {
  ordinalNumber: buildMatchPatternFn({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: (value: string) => parseInt(value, 10),
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
    valueCallback: (index) => (Number(index) + 1) as Quarter,
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
