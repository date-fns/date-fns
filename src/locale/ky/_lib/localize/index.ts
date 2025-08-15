import type { Localize, LocalizeFn } from "../../../types.js";
import { buildLocalizeFn } from "../../../_lib/buildLocalizeFn/index.js";

const eraValues = {
  narrow: ["б. з. ч.", "б. з."] as const,
  abbreviated: ["б. з. ч.", "б. з."] as const,
  wide: ["биздин заманга чейин", "биздин замандын"] as const,
};

const quarterValues = {
  narrow: ["1", "2", "3", "4"] as const,
  abbreviated: ["1-чи кв.", "2-чи кв.", "3-чү кв.", "4-чү кв."] as const,
  wide: [
    "1-чи квартал",
    "2-чи квартал",
    "3-чү квартал",
    "4-чү квартал",
  ] as const,
};

const monthValues = {
  narrow: ["Ү", "Б", "Ж", "Ч", "Г", "К", "Т", "Б", "А", "Т", "Ж", "Б"] as const,
  abbreviated: [
    "үч.",
    "бир.",
    "жак.",
    "чык.",
    "бугу",
    "кулжа",
    "теке",
    "бао.",
    "аяо.",
    "тог.",
    "жет.",
    "беш.",
  ] as const,
  wide: [
    "үчтүн айы",
    "бирдин айы",
    "жалган куран",
    "чын куран",
    "бугу",
    "кулжа",
    "теке",
    "баш оона",
    "аяк оона",
    "тогуздун айы",
    "жетинин айы",
    "бештин айы",
  ] as const,
};

const formattingMonthValues = {
  narrow: ["Ү", "Б", "Ж", "Ч", "Г", "К", "Т", "Б", "А", "Т", "Ж", "Б"] as const,
  abbreviated: [
    "үч.",
    "бир.",
    "жак.",
    "чык.",
    "бугу",
    "кулжа",
    "теке",
    "бао.",
    "аяо.",
    "тог.",
    "жет.",
    "беш.",
  ] as const,
  wide: [
    "үчтүн айы",
    "бирдин айы",
    "жалган куран",
    "чын куран",
    "бугу",
    "кулжа",
    "теке",
    "баш оона",
    "аяк оона",
    "тогуздун айы",
    "жетинин айы",
    "бештин айы",
  ] as const,
};

const dayValues = {
  narrow: ["Ж", "Д", "Ш", "Ш", "Б", "Ж", "И"] as const,
  short: ["жш", "дш", "шш", "шр", "бш", "жм", "иш"] as const,
  abbreviated: ["жш", "дш", "шш", "шр", "бш", "жм", "иш"] as const,
  wide: [
    "жекшемби",
    "дүйшөмбү",
    "шейшемби",
    "шаршемби",
    "бейшемби",
    "жума",
    "ишемби",
  ] as const,
};

const dayPeriodValues = {
  narrow: {
    am: "ТЧ",
    pm: "ТК",
    midnight: "түн ортосу",
    noon: "түш",
    morning: "таң",
    afternoon: "күндүз",
    evening: "кеч",
    night: "түн",
  },
  wide: {
    am: "ТЧ",
    pm: "ТК",
    midnight: "түн ортосу",
    noon: "түш",
    morning: "таң",
    afternoon: "күндүз",
    evening: "кеч",
    night: "түн",
  },
};

const formattingDayPeriodValues = {
  narrow: {
    am: "ТЧ",
    pm: "ТК",
    midnight: "түн ортосун",
    noon: "түштү",
    morning: "таңды",
    afternoon: "күндүздү",
    evening: "кечти",
    night: "түндү",
  },
  wide: {
    am: "ТЧ",
    pm: "ТК",
    midnight: "түн ортосун",
    noon: "түштү",
    morning: "таңды",
    afternoon: "күндүздү",
    evening: "кечти",
    night: "түндү",
  },
};

const suffixes = {
  0: "-чу",
  1: "-чи",
  2: "-чи",
  3: "-чү",
  4: "-чү",
  5: "-чи",
  6: "-чы",
  7: "-чи",
  8: "-чи",
  9: "-чу",
  10: "-чу",
  20: "-чы",
  30: "-чу",
  40: "-чы",
  50: "-чү",
  60: "-чы",
  70: "-чи",
  80: "-чи",
  90: "-чу",
  100: "-чү",
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
