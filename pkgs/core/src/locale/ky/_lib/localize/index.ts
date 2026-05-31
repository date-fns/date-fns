import type { Localize, LocalizeFn } from "../../../types.ts";
import { buildLocalizeFn } from "../../../_lib/buildLocalizeFn/index.ts";

const eraValues = {
  narrow: ["б.з.ч.", "б.з."] as const,
  abbreviated: ["б.з.ч.", "б.з."] as const,
  wide: ["биздин заманга чейин", "биздин заман"] as const,
};

const quarterValues = {
  narrow: ["1", "2", "3", "4"] as const,
  abbreviated: ["1-ч.", "2-ч.", "3-ч.", "4-ч."] as const,
  wide: ["1-чейрек", "2-чейрек", "3-чейрек", "4-чейрек"] as const,
};

const formattingQuarterValues = {
  narrow: ["1", "2", "3", "4"] as const,
  abbreviated: ["1-чей.", "2-чей.", "3-чей.", "4-чей."] as const,
  wide: ["1-чейрек", "2-чейрек", "3-чейрек", "4-чейрек"] as const,
};

const monthValues = {
  narrow: ["Я", "Ф", "М", "А", "М", "И", "И", "А", "С", "О", "Н", "Д"] as const,
  abbreviated: [
    "Янв",
    "Фев",
    "Мар",
    "Апр",
    "Май",
    "Июн",
    "Июл",
    "Авг",
    "Сен",
    "Окт",
    "Ноя",
    "Дек",
  ] as const,
  wide: [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь",
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
    "июн.",
    "июл.",
    "авг.",
    "сен.",
    "окт.",
    "ноя.",
    "дек.",
  ] as const,
  wide: [
    "январь",
    "февраль",
    "март",
    "апрель",
    "май",
    "июнь",
    "июль",
    "август",
    "сентябрь",
    "октябрь",
    "ноябрь",
    "декабрь",
  ] as const,
};

const dayValues = {
  narrow: ["Ж", "Д", "Ш", "Ш", "Б", "Ж", "И"] as const,
  short: ["жш.", "дш.", "шш.", "шр.", "бш.", "жм.", "иш."] as const,
  abbreviated: [
    "жек.",
    "дүй.",
    "шейш.",
    "шарш.",
    "бейш.",
    "жума",
    "ишм.",
  ] as const,
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
    am: "тң",
    pm: "тк",
    midnight: "түн орт",
    noon: "чт",
    morning: "эртң мн",
    afternoon: "түшт кйн",
    evening: "кечк",
    night: "түн",
  },
  abbreviated: {
    am: "тң",
    pm: "тк",
    midnight: "түн ортосу",
    noon: "чак түш",
    morning: "эртең менен",
    afternoon: "түштөн кийин",
    evening: "кечкурун",
    night: "түн",
  },
  wide: {
    am: "таңкы",
    pm: "түштөн кийинки",
    midnight: "түн ортосу",
    noon: "чак түш",
    morning: "эртең менен",
    afternoon: "түштөн кийин",
    evening: "кечкурун",
    night: "түн",
  },
};

const formattingDayPeriodValues = {
  narrow: {
    am: "тң",
    pm: "тк",
    midnight: "түн орт",
    noon: "чт",
    morning: "эртң мн",
    afternoon: "түшт кйн",
    evening: "кечк",
    night: "түн",
  },
  abbreviated: {
    am: "тң",
    pm: "тк",
    midnight: "түн ортосу",
    noon: "чак түш",
    morning: "эртең менен",
    afternoon: "түштөн кийин",
    evening: "кечинде",
    night: "түн ичинде",
  },
  wide: {
    am: "таңкы",
    pm: "түштөн кийинки",
    midnight: "түн ортосу",
    noon: "чак түш",
    morning: "эртең менен",
    afternoon: "түштөн кийин",
    evening: "кечинде",
    night: "түн ичинде",
  },
};

const suffixes = {
  0: "-чү",
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
  const hundreds = number >= 100 ? 100 : null;
  const suffix =
    suffixes[number] ||
    suffixes[mod10] ||
    (hundreds && suffixes[hundreds]) ||
    "";

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
    formattingValues: formattingQuarterValues,
    defaultFormattingWidth: "wide",
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
    defaultWidth: "wide",
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: "wide",
  }),
};
