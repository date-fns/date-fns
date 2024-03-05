import type { Localize, LocalizeFn } from "../../../types.js";
import { buildLocalizeFn } from "../../../_lib/buildLocalizeFn/index.js";

const eraValues = {
  narrow: ["пр.н.е.", "АД"] as const,
  abbreviated: ["пр. Хр.", "по. Хр."] as const,
  wide: ["Пре Христа", "После Христа"] as const,
};

const quarterValues = {
  narrow: ["1.", "2.", "3.", "4."] as const,
  abbreviated: ["1. кв.", "2. кв.", "3. кв.", "4. кв."] as const,
  wide: ["1. квартал", "2. квартал", "3. квартал", "4. квартал"] as const,
};

const monthValues = {
  narrow: [
    "1.",
    "2.",
    "3.",
    "4.",
    "5.",
    "6.",
    "7.",
    "8.",
    "9.",
    "10.",
    "11.",
    "12.",
  ] as const,
  abbreviated: [
    "јан",
    "феб",
    "мар",
    "апр",
    "мај",
    "јун",
    "јул",
    "авг",
    "сеп",
    "окт",
    "нов",
    "дец",
  ] as const,
  wide: [
    "јануар",
    "фебруар",
    "март",
    "април",
    "мај",
    "јун",
    "јул",
    "август",
    "септембар",
    "октобар",
    "новембар",
    "децембар",
  ] as const,
};

const formattingMonthValues = {
  narrow: [
    "1.",
    "2.",
    "3.",
    "4.",
    "5.",
    "6.",
    "7.",
    "8.",
    "9.",
    "10.",
    "11.",
    "12.",
  ] as const,
  abbreviated: [
    "јан",
    "феб",
    "мар",
    "апр",
    "мај",
    "јун",
    "јул",
    "авг",
    "сеп",
    "окт",
    "нов",
    "дец",
  ] as const,
  wide: [
    "јануар",
    "фебруар",
    "март",
    "април",
    "мај",
    "јун",
    "јул",
    "август",
    "септембар",
    "октобар",
    "новембар",
    "децембар",
  ] as const,
};

const dayValues = {
  narrow: ["Н", "П", "У", "С", "Ч", "П", "С"] as const,
  short: ["нед", "пон", "уто", "сре", "чет", "пет", "суб"] as const,
  abbreviated: ["нед", "пон", "уто", "сре", "чет", "пет", "суб"] as const,
  wide: [
    "недеља",
    "понедељак",
    "уторак",
    "среда",
    "четвртак",
    "петак",
    "субота",
  ] as const,
};

const formattingDayPeriodValues = {
  narrow: {
    am: "АМ",
    pm: "ПМ",
    midnight: "поноћ",
    noon: "подне",
    morning: "ујутру",
    afternoon: "поподне",
    evening: "увече",
    night: "ноћу",
  },
  abbreviated: {
    am: "АМ",
    pm: "ПМ",
    midnight: "поноћ",
    noon: "подне",
    morning: "ујутру",
    afternoon: "поподне",
    evening: "увече",
    night: "ноћу",
  },
  wide: {
    am: "AM",
    pm: "PM",
    midnight: "поноћ",
    noon: "подне",
    morning: "ујутру",
    afternoon: "после подне",
    evening: "увече",
    night: "ноћу",
  },
};

const dayPeriodValues = {
  narrow: {
    am: "AM",
    pm: "PM",
    midnight: "поноћ",
    noon: "подне",
    morning: "ујутру",
    afternoon: "поподне",
    evening: "увече",
    night: "ноћу",
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "поноћ",
    noon: "подне",
    morning: "ујутру",
    afternoon: "поподне",
    evening: "увече",
    night: "ноћу",
  },
  wide: {
    am: "AM",
    pm: "PM",
    midnight: "поноћ",
    noon: "подне",
    morning: "ујутру",
    afternoon: "после подне",
    evening: "увече",
    night: "ноћу",
  },
};

const ordinalNumber: LocalizeFn<number> = (dirtyNumber, _options) => {
  const number = Number(dirtyNumber);
  return number + ".";
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
    defaultWidth: "wide",
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: "wide",
  }),
};
