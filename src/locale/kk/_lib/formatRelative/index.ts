import { isSameWeek } from "../../../../isSameWeek/index.js";
import type { Day } from "../../../../types.js";
import type {
  FormatRelativeFn,
  FormatRelativeFnOptions,
} from "../../../types.js";

const accusativeWeekdays = [
  "жексенбіде",
  "дүйсенбіде",
  "сейсенбіде",
  "сәрсенбіде",
  "бейсенбіде",
  "жұмада",
  "сенбіде",
];

function lastWeek(day: Day) {
  const weekday = accusativeWeekdays[day];

  return "'өткен " + weekday + " сағат' p'-де'";
}

function thisWeek(day: Day) {
  const weekday = accusativeWeekdays[day];

  return "'" + weekday + " сағат' p'-де'";
}

function nextWeek(day: Day) {
  const weekday = accusativeWeekdays[day];

  return "'келесі " + weekday + " сағат' p'-де'";
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
  yesterday: "'кеше сағат' p'-де'",
  today: "'бүгін сағат' p'-де'",
  tomorrow: "'ертең сағат' p'-де'",
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
