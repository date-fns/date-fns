import { buildLocalizeFn } from "../../../_lib/buildLocalizeFn/index.js";
import type { Localize, LocalizeFn } from "../../../types.js";
import type { Quarter } from "../../../../types.js";

const eraValues = {
  narrow: ["ق", "ب"] as const,
  abbreviated: ["ق.م.", "ب.م."] as const,
  wide: ["قبل الميلاد", "بعد الميلاد"] as const,
};

const quarterValues = {
  narrow: ["1", "2", "3", "4"] as const,
  abbreviated: ["ر1", "ر2", "ر3", "ر4"] as const,
  wide: [
    "الربع الأول",
    "الربع الثاني",
    "الربع الثالث",
    "الربع الرابع",
  ] as const,
};

const monthValues = {
  narrow: ["ج", "ف", "م", "أ", "م", "ج", "ج", "أ", "س", "أ", "ن", "د"] as const,
  abbreviated: [
    "جانـ",
    "فيفـ",
    "مارس",
    "أفريل",
    "مايـ",
    "جوانـ",
    "جويـ",
    "أوت",
    "سبتـ",
    "أكتـ",
    "نوفـ",
    "ديسـ",
  ] as const,
  wide: [
    "جانفي",
    "فيفري",
    "مارس",
    "أفريل",
    "ماي",
    "جوان",
    "جويلية",
    "أوت",
    "سبتمبر",
    "أكتوبر",
    "نوفمبر",
    "ديسمبر",
  ] as const,
};

const dayValues = {
  narrow: ["ح", "ن", "ث", "ر", "خ", "ج", "س"] as const,
  short: ["أحد", "اثنين", "ثلاثاء", "أربعاء", "خميس", "جمعة", "سبت"] as const,
  abbreviated: ["أحد", "اثنـ", "ثلا", "أربـ", "خميـ", "جمعة", "سبت"] as const,
  wide: [
    "الأحد",
    "الاثنين",
    "الثلاثاء",
    "الأربعاء",
    "الخميس",
    "الجمعة",
    "السبت",
  ] as const,
};

const dayPeriodValues = {
  narrow: {
    am: "ص",
    pm: "م",
    midnight: "ن",
    noon: "ظ",
    morning: "صباحاً",
    afternoon: "بعد الظهر",
    evening: "مساءاً",
    night: "ليلاً",
  },
  abbreviated: {
    am: "ص",
    pm: "م",
    midnight: "نصف الليل",
    noon: "ظهر",
    morning: "صباحاً",
    afternoon: "بعد الظهر",
    evening: "مساءاً",
    night: "ليلاً",
  },
  wide: {
    am: "ص",
    pm: "م",
    midnight: "نصف الليل",
    noon: "ظهر",
    morning: "صباحاً",
    afternoon: "بعد الظهر",
    evening: "مساءاً",
    night: "ليلاً",
  },
};
const formattingDayPeriodValues = {
  narrow: {
    am: "ص",
    pm: "م",
    midnight: "ن",
    noon: "ظ",
    morning: "في الصباح",
    afternoon: "بعد الظـهر",
    evening: "في المساء",
    night: "في الليل",
  },
  abbreviated: {
    am: "ص",
    pm: "م",
    midnight: "نصف الليل",
    noon: "ظهر",
    morning: "في الصباح",
    afternoon: "بعد الظهر",
    evening: "في المساء",
    night: "في الليل",
  },
  wide: {
    am: "ص",
    pm: "م",
    midnight: "نصف الليل",
    noon: "ظهر",
    morning: "صباحاً",
    afternoon: "بعد الظـهر",
    evening: "في المساء",
    night: "في الليل",
  },
};

const ordinalNumber: LocalizeFn<number> = (dirtyNumber) => {
  return String(dirtyNumber);
};

export const localize: Localize = {
  ordinalNumber: ordinalNumber,

  era: buildLocalizeFn({
    values: eraValues,
    defaultWidth: "wide",
  }),

  quarter: buildLocalizeFn({
    values: quarterValues,
    defaultWidth: "wide",
    argumentCallback: (quarter) => (Number(quarter) - 1) as Quarter,
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
