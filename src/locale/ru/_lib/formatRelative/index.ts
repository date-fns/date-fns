import { isSameWeek } from "../../../../isSameWeek/index.js";
import type { Day } from "../../../../types.js";
import type {
  FormatRelativeFn,
  FormatRelativeFnOptions,
} from "../../../types.js";

const accusativeWeekdays = [
  "воскресенье",
  "понедельник",
  "вторник",
  "среду",
  "четверг",
  "пятницу",
  "субботу",
];

function lastWeek(day: Day): string {
  const weekday = accusativeWeekdays[day];

  switch (day) {
    case 0:
      return "'в прошлое " + weekday + " в' p";
    case 1:
    case 2:
    case 4:
      return "'в прошлый " + weekday + " в' p";
    case 3:
    case 5:
    case 6:
      return "'в прошлую " + weekday + " в' p";
  }
}

function thisWeek(day: Day) {
  const weekday = accusativeWeekdays[day];

  if (day === 2 /* Tue */) {
    return "'во " + weekday + " в' p";
  } else {
    return "'в " + weekday + " в' p";
  }
}

function nextWeek(day: Day) {
  const weekday = accusativeWeekdays[day];

  switch (day) {
    case 0:
      return "'в следующее " + weekday + " в' p";
    case 1:
    case 2:
    case 4:
      return "'в следующий " + weekday + " в' p";
    case 3:
    case 5:
    case 6:
      return "'в следующую " + weekday + " в' p";
  }
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
  yesterday: "'вчера в' p",
  today: "'сегодня в' p",
  tomorrow: "'завтра в' p",
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
