import { isSameWeek } from "../../../../isSameWeek/index.js";
import { toDate } from "../../../../toDate/index.js";
import type { Day } from "../../../../types.js";
import type {
  FormatRelativeFn,
  FormatRelativeTokenFn,
} from "../../../types.js";

const accusativeWeekdays = [
  "неділю",
  "понеділок",
  "вівторок",
  "середу",
  "четвер",
  "п’ятницю",
  "суботу",
];

function lastWeek(day: Day): string {
  const weekday = accusativeWeekdays[day];

  switch (day) {
    case 0:
    case 3:
    case 5:
    case 6:
      return "'у минулу " + weekday + " о' p";
    case 1:
    case 2:
    case 4:
      return "'у минулий " + weekday + " о' p";
  }
}

function thisWeek(day: Day): string {
  const weekday = accusativeWeekdays[day];

  return "'у " + weekday + " о' p";
}

function nextWeek(day: Day): string {
  const weekday = accusativeWeekdays[day];

  switch (day) {
    case 0:
    case 3:
    case 5:
    case 6:
      return "'у наступну " + weekday + " о' p";
    case 1:
    case 2:
    case 4:
      return "'у наступний " + weekday + " о' p";
  }
}

const lastWeekFormat: FormatRelativeTokenFn = (
  dirtyDate,
  baseDate,
  options,
) => {
  const date = toDate(dirtyDate);
  const day = date.getDay() as Day;

  if (isSameWeek(date, baseDate, options)) {
    return thisWeek(day);
  } else {
    return lastWeek(day);
  }
};

const nextWeekFormat: FormatRelativeTokenFn = (
  dirtyDate,
  baseDate,
  options,
) => {
  const date = toDate(dirtyDate);
  const day = date.getDay() as Day;
  if (isSameWeek(date, baseDate, options)) {
    return thisWeek(day);
  } else {
    return nextWeek(day);
  }
};

const formatRelativeLocale = {
  lastWeek: lastWeekFormat,
  yesterday: "'вчора о' p",
  today: "'сьогодні о' p",
  tomorrow: "'завтра о' p",
  nextWeek: nextWeekFormat,
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
