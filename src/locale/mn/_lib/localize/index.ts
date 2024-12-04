import type { Localize, LocalizeFn } from "../../../types.js";
import { buildLocalizeFn } from "../../../_lib/buildLocalizeFn/index.js";

const eraValues = {
  narrow: ["НТӨ", "НТ"] as const,
  abbreviated: ["НТӨ", "НТ"] as const,
  wide: ["нийтийн тооллын өмнөх", "нийтийн тооллын"] as const,
};

const quarterValues = {
  narrow: ["I", "II", "III", "IV"] as const,
  abbreviated: ["I улирал", "II улирал", "III улирал", "IV улирал"] as const,
  wide: ["1-р улирал", "2-р улирал", "3-р улирал", "4-р улирал"] as const,
};

// Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.
const monthValues = {
  narrow: [
    "I",
    "II",
    "III",
    "IV",
    "V",
    "VI",
    "VII",
    "VIII",
    "IX",
    "X",
    "XI",
    "XII",
  ] as const,
  abbreviated: [
    "1-р сар",
    "2-р сар",
    "3-р сар",
    "4-р сар",
    "5-р сар",
    "6-р сар",
    "7-р сар",
    "8-р сар",
    "9-р сар",
    "10-р сар",
    "11-р сар",
    "12-р сар",
  ] as const,
  wide: [
    "Нэгдүгээр сар",
    "Хоёрдугаар сар",
    "Гуравдугаар сар",
    "Дөрөвдүгээр сар",
    "Тавдугаар сар",
    "Зургаадугаар сар",
    "Долоодугаар сар",
    "Наймдугаар сар",
    "Есдүгээр сар",
    "Аравдугаар сар",
    "Арваннэгдүгээр сар",
    "Арван хоёрдугаар сар",
  ] as const,
};

const formattingMonthValues = {
  narrow: [
    "I",
    "II",
    "III",
    "IV",
    "V",
    "VI",
    "VII",
    "VIII",
    "IX",
    "X",
    "XI",
    "XII",
  ] as const,
  abbreviated: [
    "1-р сар",
    "2-р сар",
    "3-р сар",
    "4-р сар",
    "5-р сар",
    "6-р сар",
    "7-р сар",
    "8-р сар",
    "9-р сар",
    "10-р сар",
    "11-р сар",
    "12-р сар",
  ] as const,
  wide: [
    "нэгдүгээр сар",
    "хоёрдугаар сар",
    "гуравдугаар сар",
    "дөрөвдүгээр сар",
    "тавдугаар сар",
    "зургаадугаар сар",
    "долоодугаар сар",
    "наймдугаар сар",
    "есдүгээр сар",
    "аравдугаар сар",
    "арваннэгдүгээр сар",
    "арван хоёрдугаар сар",
  ] as const,
};

const dayValues = {
  narrow: ["Н", "Д", "М", "Л", "П", "Б", "Б"] as const,
  short: ["Ня", "Да", "Мя", "Лх", "Пү", "Ба", "Бя"] as const,
  abbreviated: ["Ням", "Дав", "Мяг", "Лха", "Пүр", "Баа", "Бям"] as const,
  wide: [
    "Ням",
    "Даваа",
    "Мягмар",
    "Лхагва",
    "Пүрэв",
    "Баасан",
    "Бямба",
  ] as const,
};

const formattingDayValues = {
  narrow: ["Н", "Д", "М", "Л", "П", "Б", "Б"] as const,
  short: ["Ня", "Да", "Мя", "Лх", "Пү", "Ба", "Бя"] as const,
  abbreviated: ["Ням", "Дав", "Мяг", "Лха", "Пүр", "Баа", "Бям"] as const,
  wide: [
    "ням",
    "даваа",
    "мягмар",
    "лхагва",
    "пүрэв",
    "баасан",
    "бямба",
  ] as const,
};

const dayPeriodValues = {
  narrow: {
    am: "ү.ө.",
    pm: "ү.х.",
    midnight: "шөнө дунд",
    noon: "үд дунд",
    morning: "өглөө",
    afternoon: "өдөр",
    evening: "орой",
    night: "шөнө",
  },
  abbreviated: {
    am: "ү.ө.",
    pm: "ү.х.",
    midnight: "шөнө дунд",
    noon: "үд дунд",
    morning: "өглөө",
    afternoon: "өдөр",
    evening: "орой",
    night: "шөнө",
  },
  wide: {
    am: "ү.ө.",
    pm: "ү.х.",
    midnight: "шөнө дунд",
    noon: "үд дунд",
    morning: "өглөө",
    afternoon: "өдөр",
    evening: "орой",
    night: "шөнө",
  },
};

const ordinalNumber: LocalizeFn<number> = (dirtyNumber, _options) => {
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
    formattingValues: formattingMonthValues,
    defaultFormattingWidth: "wide",
  }),

  day: buildLocalizeFn({
    values: dayValues,
    defaultWidth: "wide",
    formattingValues: formattingDayValues,
    defaultFormattingWidth: "wide",
  }),

  dayPeriod: buildLocalizeFn({
    values: dayPeriodValues,
    defaultWidth: "wide",
  }),
};
