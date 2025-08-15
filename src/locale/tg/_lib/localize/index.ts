import type { Localize, LocalizeFn } from "../../../types.js";
import { buildLocalizeFn } from "../../../_lib/buildLocalizeFn/index.js";

const eraValues = {
  narrow: ["т. м.", "м."] as const,
  abbreviated: ["то милод", "милодӣ"] as const,
  wide: ["то милод", "милодӣ"] as const,
};

const quarterValues = {
  narrow: ["1", "2", "3", "4"] as const,
  abbreviated: ["1-ум ч.", "2-юм ч.", "3-юм ч.", "4-ум ч."] as const,
  wide: [
    "1-ум чоряк",
    "2-юм чоряк",
    "3-юм чоряк",
    "4-ум чоряк",
  ] as const,
};

const monthValues = {
  narrow: ["Я", "Ф", "М", "А", "М", "И", "И", "А", "С", "О", "Н", "Д"] as const,
  abbreviated: [
    "янв.",
    "фев.",
    "мар.",
    "апр.",
    "май",
    "июн",
    "июл",
    "авг.",
    "сен.",
    "окт.",
    "ноя.",
    "дек.",
  ] as const,
  wide: [
    "январ",
    "феврал",
    "март",
    "апрел",
    "май",
    "июн",
    "июл",
    "август",
    "сентябр",
    "октябр",
    "ноябр",
    "декабр",
  ] as const,
};

const formattingMonthValues = {
  narrow: ["Я", "Ф", "М", "А", "М", "И", "И", "А", "С", "О", "Н", "Д"] as const,
  abbreviated: [
    "янв.",
    "фев.",
    "мар.",
    "апр.",
    "май",
    "июн",
    "июл",
    "авг.",
    "сен.",
    "окт.",
    "ноя.",
    "дек.",
  ] as const,
  wide: [
    "январ",
    "феврал",
    "март",
    "апрел",
    "май",
    "июн",
    "июл",
    "август",
    "сентябр",
    "октябр",
    "ноябр",
    "декабр",
  ] as const,
};

const dayValues = {
  narrow: ["Я", "Д", "С", "Ч", "П", "Ҷ", "Ш"] as const,
  short: ["якш.", "дш.", "сш.", "чш.", "пш.", "ҷм.", "шб."] as const,
  abbreviated: ["якш", "дш", "сш", "чш", "пш", "ҷм", "шб"] as const,
  wide: [
    "якшанбе",
    "душанбе",
    "сешанбе",
    "чоршанбе",
    "панҷшанбе",
    "ҷумъа",
    "шанбе",
  ] as const,
};

const dayPeriodValues = {
  narrow: {
    am: "ТО",
    pm: "ТК",
    midnight: "нимшаб",
    noon: "пешин",
    morning: "суб",
    afternoon: "рӯз",
    evening: "бегоҳ",
    night: "шаб",
  },
  wide: {
    am: "ТО",
    pm: "ТК",
    midnight: "нимшаб",
    noon: "пешин",
    morning: "субҳ",
    afternoon: "рӯз",
    evening: "бегоҳ",
    night: "шаб",
  },
};

const formattingDayPeriodValues = {
  narrow: {
    am: "ТО",
    pm: "ТК",
    midnight: "нимшабро",
    noon: "пешинро",
    morning: "субҳро",
    afternoon: "рӯзро",
    evening: "бегоҳро",
    night: "шабро",
  },
  wide: {
    am: "ТО",
    pm: "ТК",
    midnight: "нимшабро",
    noon: "пешинро",
    morning: "субҳро",
    afternoon: "рӯзро",
    evening: "бегоҳро",
    night: "шабро",
  },
};

const suffixes = {
  0: "-ум",
  1: "-ум",
  2: "-юм",
  3: "-юм",
  4: "-ум",
  5: "-ум",
  6: "-ум",
  7: "-ум",
  8: "-ум",
  9: "-ум",
  10: "-ум",
  20: "-ум",
  30: "-ум",
  40: "-ум",
  50: "-ум",
  60: "-ум",
  70: "-ум",
  80: "-ум",
  90: "-ум",
  100: "-ум",
};

type SuffixesKey = keyof typeof suffixes;

const ordinalNumber: LocalizeFn<number> = (dirtyNumber, _options) => {
  const number = Number(dirtyNumber) as SuffixesKey;
  const mod10 = (number % 10) as SuffixesKey;
  const b = number >= 100 ? 100 : null;
  const suffix =
    suffixes[number] || suffixes[mod10] || (b && suffixes[b]) || "";

  return number + suffix;
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
    formattingValues: formattingMonthValues,
    defaultFormattingWidth: "wide",
  }),

  day: buildLocalizeFn({
    values: dayValues,
    defaultWidth: "wide",
  }),

  dayPeriod: buildLocalizeFn({
    values: dayPeriodValues,
    defaultWidth: "any",
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: "wide",
  }),
};
