import { isSameWeek } from "../../../../isSameWeek/index.js";
import type { Day } from "../../../../types.js";
import type {
  FormatRelativeFn,
  FormatRelativeFnOptions,
} from "../../../types.js";

const accusativeWeekdays = [
  "якшанбе",
  "душанбе",
  "сешанбе",
  "чоршанбе",
  "панҷшанбе",
  "ҷумъа",
  "шанбе",
];

function lastWeek(day: Day): string {
  const weekday = accusativeWeekdays[day];

  return "'" + weekday + "и гузашта соати' p";
}

function thisWeek(day: Day) {
  const weekday = accusativeWeekdays[day];

  return "'рӯзи " + weekday + " соати' p";
}

function nextWeek(day: Day) {
  const weekday = accusativeWeekdays[day];

  return "'" + weekday + "и оянда соати' p";
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
  yesterday: "'дирӯз соати' p",
  today: "'имрӯз соати' p",
  tomorrow: "'пагоҳ соати' p",
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
