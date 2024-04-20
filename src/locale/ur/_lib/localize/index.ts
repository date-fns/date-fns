import type { Localize, LocalizeFn } from "../../../types.js";
import { buildLocalizeFn } from "../../../_lib/buildLocalizeFn/index.js";

const eraValues = {
  narrow: ["ق", "ع"] as const,
  abbreviated: ["۔ق۔م", "ع۔د۔"] as const,
  wide: ["قبل مسیح", "عیسوی دور"] as const,
};

const quarterValues = {
  narrow: ["1", "2", "3", "4"] as const,
  abbreviated: ["س1", "س2", "س3", "س4"] as const,
  wide: [
    "پہلی سہ ماہی",
    "دوسری سہ ماہی",
    "تیسری سہ ماہی",
    "چوتھی سہ ماہی",
  ] as const,
};

const monthValues = {
  narrow: ["ج", "ف", "م", "ا", "م", "ج", "ج", "ا", "س", "ا", "ن", "د"] as const,
  abbreviated: [
    "جنو",
    "فرور",
    "مارچ",
    "اپر",
    "مئ",
    "جون",
    "جولا",
    "اگست",
    "ستم",
    "اکت",
    "نوم",
    "دسم",
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
  narrow: ["ا", "پ", "م", "ب", "ج", "ج", "ہ"] as const,
  wide: ["اتوار", "پیر", "منگل", "بدھ", "جمعرات", "جمعہ", "ہفتہ"] as const,
};

const dayPeriodValues = {
  narrow: {
    am: "ص",
    pm: "ش",
    morning: "ص",
    noon: "د",
    afternoon: "د",
    evening: "ش",
    night: "ر",
    midnight: "آر",
  },
  abbreviated: {
    am: "ص",
    pm: "ش",
    morning: "صبح",
    noon: "دوپہر",
    afternoon: "دوپہر",
    evening: "شام",
    night: "رات",
    midnight: "آدھی رات",
  },
  wide: {
    am: "ص",
    pm: "ش",
    morning: "صبح",
    noon: "دوپہر",
    afternoon: "دوپہر",
    evening: "شام",
    night: "رات",
    midnight: "آدھی رات",
  },
};

const formattingDayPeriodValues = {
  narrow: {
    am: "ص",
    pm: "ش",
    morning: "ص",
    noon: "د",
    afternoon: "د",
    evening: "ش",
    night: "ر",
    midnight: "آر",
  },
  abbreviated: {
    am: "ص",
    pm: "ش",
    morning: "صبح کو",
    noon: "دوپہر کو",
    afternoon: "دوپہر کو",
    evening: "شام کو",
    night: "رات کو",
    midnight: "آدھی رات کو",
  },
  wide: {
    am: "ص",
    pm: "ش",
    morning: "صبح کے وقت",
    noon: "دوپہر کے وقت",
    afternoon: "دوپہر کے وقت",
    evening: "شام کے وقت",
    night: "رات کے وقت",
    midnight: "آدھی رات کے وقت",
  },
};

const ordinalNumber: LocalizeFn<number> = (dirtyNumber) => {
  return String(dirtyNumber);
};

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
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: "wide",
  }),
};
