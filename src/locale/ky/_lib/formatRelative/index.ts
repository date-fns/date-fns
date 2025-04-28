import { isSameWeek } from "../../../../isSameWeek/index.js";
import type { Day } from "../../../../types.js";
import type {
  FormatRelativeFn,
  FormatRelativeFnOptions,
} from "../../../types.js";

const accusativeWeekdays = [
  "жекшембиде",
  "дүйшөмбүдө",
  "шейшембиде",
  "шаршембиде",
  "бейшембиде",
  "жумада",
  "ишембиде",
];

function lastWeek(day: Day): string {
  const weekday = accusativeWeekdays[day];

  return "'өткөн " + weekday + " саат' p'дө'";
}

function thisWeek(day: Day) {
  const weekday = accusativeWeekdays[day];

  return "'" + weekday + " саат' p'дө'";
}

function nextWeek(day: Day) {
  const weekday = accusativeWeekdays[day];

  return "'келерки " + weekday + " саат' p'дө'";
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
  yesterday: "'кечээ саат' p'дө'",
  today: "'бүгүн саат' p'дө'",
  tomorrow: "'эртең саат' p'дө'",
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
