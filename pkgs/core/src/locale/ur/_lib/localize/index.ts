import type { Localize, LocalizeFn } from "../../../types.ts";
import { buildLocalizeFn } from "../../../_lib/buildLocalizeFn/index.ts";

const eraValues = {
  narrow: ["ق م", "عیسوی"] as const,
  abbreviated: ["ق م", "عیسوی"] as const,
  wide: ["قبل مسیح", "عیسوی"] as const,
};

const quarterValues = {
  narrow: [
    "پہلی سہ ماہی",
    "دوسری سہ ماہی",
    "تیسری سہ ماہی",
    "چوتھی سہ ماہی",
  ] as const,
  abbreviated: [
    "پہلی سہ ماہی",
    "دوسری سہ ماہی",
    "تیسری سہ ماہی",
    "چوتھی سہ ماہی",
  ] as const,
  wide: [
    "پہلی سہ ماہی",
    "دوسری سہ ماہی",
    "تیسری سہ ماہی",
    "چوتھی سہ ماہی",
  ] as const,
};

const monthValues = {
  narrow: [
    "جنوری",
    "فروری",
    "مارچ",
    "اپریل",
    "مئی",
    "جون",
    "جولائی",
    "اگست",
    "ستمبر",
    "اکتوبر",
    "نومبر",
    "دسمبر",
  ] as const,
  abbreviated: [
    "جنوری",
    "فروری",
    "مارچ",
    "اپریل",
    "مئی",
    "جون",
    "جولائی",
    "اگست",
    "ستمبر",
    "اکتوبر",
    "نومبر",
    "دسمبر",
  ] as const,
  wide: [
    "جنوری",
    "فروری",
    "مارچ",
    "اپریل",
    "مئی",
    "جون",
    "جولائی",
    "اگست",
    "ستمبر",
    "اکتوبر",
    "نومبر",
    "دسمبر",
  ] as const,
};

const dayValues = {
  narrow: [
    "اتوار",
    "پیر",
    "منگل",
    "بدھ",
    "جمعرات",
    "جمعہ",
    "ہفتہ",
  ] as const,
  short: [
    "اتوار",
    "پیر",
    "منگل",
    "بدھ",
    "جمعرات",
    "جمعہ",
    "ہفتہ",
  ] as const,
  abbreviated: [
    "اتوار",
    "پیر",
    "منگل",
    "بدھ",
    "جمعرات",
    "جمعہ",
    "ہفتہ",
  ] as const,
  wide: [
    "اتوار",
    "پیر",
    "منگل",
    "بدھ",
    "جمعرات",
    "جمعہ",
    "ہفتہ",
  ] as const,
};

const dayPeriodValues = {
  narrow: {
    am: "AM",
    pm: "PM",
    midnight: "آدھی رات",
    noon: "دوپہر",
    morning: "صبح",
    afternoon: "دوپہر",
    evening: "شام",
    night: "رات",
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "آدھی رات",
    noon: "دوپہر",
    morning: "صبح",
    afternoon: "دوپہر",
    evening: "شام",
    night: "رات",
  },
  wide: {
    am: "AM",
    pm: "PM",
    midnight: "آدھی رات",
    noon: "دوپہر",
    morning: "صبح",
    afternoon: "دوپہر",
    evening: "شام",
    night: "رات",
  },
};

// Urdu does not use ordinal suffixes in dates: "11 فروری 2026"
const ordinalNumber: LocalizeFn<number> = (num) => String(num);

export const localize: Localize = {
  ordinalNumber,

  era: buildLocalizeFn({
    values: eraValues,
    defaultWidth: "wide",
  }),

  quarter: buildLocalizeFn({
    values: quarterValues,
    defaultWidth: "wide",
    argumentCallback: (quarter) => quarter - 1,
  }),

  month: buildLocalizeFn({
    values: monthValues,
    defaultWidth: "wide",
  }),

  day: buildLocalizeFn({
    values: dayValues,
    defaultWidth: "wide",
  }),

  dayPeriod: buildLocalizeFn({
    values: dayPeriodValues,
    defaultWidth: "wide",
  }),
};