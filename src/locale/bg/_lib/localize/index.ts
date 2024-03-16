import type { LocaleUnit, Localize, LocalizeFn } from "../../../types.js";
import { buildLocalizeFn } from "../../../_lib/buildLocalizeFn/index.js";

const eraValues = {
  narrow: ["пр.н.е.", "н.е."] as const,
  abbreviated: ["преди н. е.", "н. е."] as const,
  wide: ["преди новата ера", "новата ера"] as const,
};

const quarterValues = {
  narrow: ["1", "2", "3", "4"] as const,
  abbreviated: [
    "1-во тримес.",
    "2-ро тримес.",
    "3-то тримес.",
    "4-то тримес.",
  ] as const,
  wide: [
    "1-во тримесечие",
    "2-ро тримесечие",
    "3-то тримесечие",
    "4-то тримесечие",
  ] as const,
};

const monthValues = {
  abbreviated: [
    "яну",
    "фев",
    "мар",
    "апр",
    "май",
    "юни",
    "юли",
    "авг",
    "сеп",
    "окт",
    "ное",
    "дек",
  ] as const,
  wide: [
    "януари",
    "февруари",
    "март",
    "април",
    "май",
    "юни",
    "юли",
    "август",
    "септември",
    "октомври",
    "ноември",
    "декември",
  ] as const,
};

const dayValues = {
  narrow: ["Н", "П", "В", "С", "Ч", "П", "С"] as const,
  short: ["нд", "пн", "вт", "ср", "чт", "пт", "сб"] as const,
  abbreviated: ["нед", "пон", "вто", "сря", "чет", "пет", "съб"] as const,
  wide: [
    "неделя",
    "понеделник",
    "вторник",
    "сряда",
    "четвъртък",
    "петък",
    "събота",
  ] as const,
};

const dayPeriodValues = {
  wide: {
    am: "преди обяд",
    pm: "след обяд",
    midnight: "в полунощ",
    noon: "на обяд",
    morning: "сутринта",
    afternoon: "следобед",
    evening: "вечерта",
    night: "през нощта",
  },
};

function isFeminine(unit: LocaleUnit | undefined): boolean {
  return (
    unit === "year" || unit === "week" || unit === "minute" || unit === "second"
  );
}

function isNeuter(unit: LocaleUnit | undefined): boolean {
  return unit === "quarter";
}

function numberWithSuffix(
  number: number,
  unit: LocaleUnit | undefined,
  masculine: string,
  feminine: string,
  neuter: string,
): string {
  const suffix = isNeuter(unit)
    ? neuter
    : isFeminine(unit)
      ? feminine
      : masculine;
  return number + "-" + suffix;
}

const ordinalNumber: LocalizeFn<number> = (dirtyNumber, options) => {
  const number = Number(dirtyNumber);
  const unit = options?.unit;

  if (number === 0) {
    return numberWithSuffix(0, unit, "ев", "ева", "ево");
  } else if (number % 1000 === 0) {
    return numberWithSuffix(number, unit, "ен", "на", "но");
  } else if (number % 100 === 0) {
    return numberWithSuffix(number, unit, "тен", "тна", "тно");
  }

  const rem100 = number % 100;
  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return numberWithSuffix(number, unit, "ви", "ва", "во");
      case 2:
        return numberWithSuffix(number, unit, "ри", "ра", "ро");
      case 7:
      case 8:
        return numberWithSuffix(number, unit, "ми", "ма", "мо");
    }
  }

  return numberWithSuffix(number, unit, "ти", "та", "то");
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
