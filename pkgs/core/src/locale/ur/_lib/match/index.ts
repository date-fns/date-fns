import { buildMatchPatternFn } from "../../../_lib/buildMatchPatternFn/index.ts";
import { buildMatchFn } from "../../../_lib/buildMatchFn/index.ts";
import type { Match } from "../../../types.ts";
import type { Quarter } from "../../../../types.ts";

const matchOrdinalNumberPattern = /^(\d+)/i;
const parseOrdinalNumberPattern = /\d+/i;

const matchEraPatterns = {
  narrow: /^(ق م|عیسوی)/i,
  abbreviated: /^(ق م|عیسوی)/i,
  wide: /^(قبل مسیح|عیسوی)/i,
};

const parseEraPatterns = {
  any: [/^(?:ق م|قبل مسیح)/i, /^عیسوی/i] as const,
};

const matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^(پہلی|دوسری|تیسری|چوتھی) سہ ماہی/i,
  wide: /^(پہلی|دوسری|تیسری|چوتھی) سہ ماہی/i,
};
const parseQuarterPatterns = {
  any: [/1|پہلی/i, /2|دوسری/i, /3|تیسری/i, /4|چوتھی/i] as const,
};

const matchMonthPatterns = {
  narrow:
    /^(جنوری|فروری|مارچ|اپریل|مئی|جون|جولائی|اگست|ستمبر|اکتوبر|نومبر|دسمبر)/i,
  abbreviated:
    /^(جنوری|فروری|مارچ|اپریل|مئی|جون|جولائی|اگست|ستمبر|اکتوبر|نومبر|دسمبر)/i,
  wide:
    /^(جنوری|فروری|مارچ|اپریل|مئی|جون|جولائی|اگست|ستمبر|اکتوبر|نومبر|دسمبر)/i,
};

const parseMonthPatterns = {
  narrow: [
    /^جنوری/i,
    /^فروری/i,
    /^مارچ/i,
    /^اپریل/i,
    /^مئی/i,
    /^جون/i,
    /^جولائی/i,
    /^اگست/i,
    /^ستمبر/i,
    /^اکتوبر/i,
    /^نومبر/i,
    /^دسمبر/i,
  ] as const,
  any: [
    /^جنوری/i,
    /^فروری/i,
    /^مارچ/i,
    /^اپریل/i,
    /^مئی/i,
    /^جون/i,
    /^جولائی/i,
    /^اگست/i,
    /^ستمبر/i,
    /^اکتوبر/i,
    /^نومبر/i,
    /^دسمبر/i,
  ] as const,
};

const matchDayPatterns = {
  narrow:
    /^(اتوار|پیر|منگل|بدھ|جمعرات|جمعہ|ہفتہ)/i,
  short:
    /^(اتوار|پیر|منگل|بدھ|جمعرات|جمعہ|ہفتہ)/i,
  abbreviated:
    /^(اتوار|پیر|منگل|بدھ|جمعرات|جمعہ|ہفتہ)/i,
  wide:
    /^(اتوار|پیر|منگل|بدھ|جمعرات|جمعہ|ہفتہ)/i,
};

const parseDayPatterns = {
  narrow: [
    /^اتوار/i,
    /^پیر/i,
    /^منگل/i,
    /^بدھ/i,
    /^جمعرات/i,
    /^جمعہ/i,
    /^ہفتہ/i,
  ] as const,
  any: [
    /^اتوار/i,
    /^پیر/i,
    /^منگل/i,
    /^بدھ/i,
    /^جمعرات/i,
    /^جمعہ/i,
    /^ہفتہ/i,
  ] as const,
};

const matchDayPeriodPatterns = {
  narrow: /^(AM|PM|آدھی رات|دوپہر|صبح|شام|رات)/i,
  any: /^(AM|PM|آدھی رات|دوپہر|صبح|شام|رات)/i,
};

const parseDayPeriodPatterns = {
  any: {
    am: /^am/i,
    pm: /^pm/i,
    midnight: /^آدھی رات/i,
    noon: /^دوپہر/i,
    afternoon: /^دوپہر/i,
    morning: /^صبح/i,
    evening: /^شام/i,
    night: /^رات/i,
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
