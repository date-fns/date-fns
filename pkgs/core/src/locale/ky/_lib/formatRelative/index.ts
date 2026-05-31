import { isSameWeek } from "../../../../isSameWeek/index.ts";
import type { Day } from "../../../../types.ts";
import type {
  FormatRelativeFn,
  FormatRelativeFnOptions,
} from "../../../types.ts";

const locativeWeekdays = [
  "жекшембиде",
  "дүйшөмбүдө",
  "шейшембиде",
  "шаршембиде",
  "бейшембиде",
  "жума күнү",
  "ишембиде",
];

function lastWeek(day: Day) {
  const weekday = locativeWeekdays[day];

  return "'өткөн " + weekday + " саат' p";
}

function thisWeek(day: Day) {
  const weekday = locativeWeekdays[day];

  return "'" + weekday + " саат' p";
}

function nextWeek(day: Day) {
  const weekday = locativeWeekdays[day];

  return "'келерки " + weekday + " саат' p";
}

const formatRelativeLocale = {
  lastWeek: <DateType extends Date>(
    date: DateType,
    baseDate: DateType,
    options?: FormatRelativeFnOptions,
  ): string => {
    const day = date.getDay() as Day;
    if (isSameWeek(date, baseDate, options)) {
      return thisWeek(day);
    } else {
      return lastWeek(day);
    }
  },
  yesterday: "'кечээ саат' p",
  today: "'бүгүн саат' p",
  tomorrow: "'эртең саат' p",
  nextWeek: <DateType extends Date>(
    date: DateType,
    baseDate: DateType,
    options?: FormatRelativeFnOptions,
  ): string => {
    const day = date.getDay() as Day;
    if (isSameWeek(date, baseDate, options)) {
      return thisWeek(day);
    } else {
      return nextWeek(day);
    }
  },
  other: "P",
};

export const formatRelative: FormatRelativeFn = (
  token,
  date,
  baseDate,
  options,
) => {
  const format = formatRelativeLocale[token];

  if (typeof format === "function") {
    return format(date, baseDate, options);
  }

  return format;
};
