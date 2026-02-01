import type { Localize, LocalizeFn } from "../../../types.ts";
import { buildLocalizeFn } from "../../../_lib/buildLocalizeFn/index.ts";

const eraValues = {
  narrow: ["б.э.к.", "б.э."] as const,
  abbreviated: ["б.э.к.", "б.э."] as const,
  wide: ["безнең эрага кадәр", "безнең эра"] as const,
};

const quarterValues = {
  narrow: ["1", "2", "3", "4"] as const,
  abbreviated: ["1 кв.", "2 кв.", "3 кв.", "4 кв."] as const,
  wide: ["1 нче квартал", "2 нче квартал", "3 нче квартал", "4 нче квартал"] as const,
};

const monthValues = {
  narrow: ["Г", "Ф", "М", "А", "М", "И", "И", "А", "С", "О", "Н", "Д"] as const,
  abbreviated: [
    "гыйн.",
    "фев.",
    "мар.",
    "апр.",
    "май",
    "июнь",
    "июль",
    "авг.",
    "сент.",
    "окт.",
    "нояб.",
    "дек.",
  ] as const,
  wide: [
    "гыйнвар",
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
  narrow: ["Я", "Д", "С", "Ч", "П", "Җ", "Ш"] as const,
  short: ["як", "дү", "сш", "чә", "пә", "җм", "шб"] as const,
  abbreviated: ["якш", "дүш", "сиш", "чәр", "пәнҗ", "җом", "шим"] as const,
  wide: [
    "якшәмбе",
    "дүшәмбе",
    "сишәмбе",
    "чәршәмбе",
    "пәнҗешәмбе",
    "җомга",
    "шимбә",
  ] as const,
};

const dayPeriodValues = {
  narrow: {
    am: "ТК",
    pm: "ТС",
    midnight: "төн уртасы",
    noon: "төш",
    morning: "иртә",
    afternoon: "көндез",
    evening: "кич",
    night: "төн",
  },
  abbreviated: {
    am: "ТК",
    pm: "ТС",
    midnight: "төн уртасы",
    noon: "төш",
    morning: "иртә",
    afternoon: "көндез",
    evening: "кич",
    night: "төн",
  },
  wide: {
    am: "ТК",
    pm: "ТС",
    midnight: "төн уртасы",
    noon: "төш",
    morning: "иртә",
    afternoon: "көндез",
    evening: "кич",
    night: "төн",
  },
};

const ordinalNumber: LocalizeFn<number> = (dirtyNumber, _options) => {
  const number = Number(dirtyNumber);
  return number + " нче";
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
  }),
};

