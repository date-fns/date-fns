import { isSameWeek } from "../../../../isSameWeek/index.js";
import type { Day } from "../../../../types.js";
import type {
  FormatRelativeFn,
  FormatRelativeFnOptions,
} from "../../../types.js";

// https://www.unicode.org/cldr/charts/32/summary/sk.html?hide#1308
const accusativeWeekdays = [
  "nedeľu",
  "pondelok",
  "utorok",
  "stredu",
  "štvrtok",
  "piatok",
  "sobotu",
];

function lastWeek(day: Day) {
  const weekday = accusativeWeekdays[day];

  switch (day) {
    case 0: /* Sun */
    case 3: /* Wed */
    case 6 /* Sat */:
      return "'minulú " + weekday + " o' p";
    default:
      return "'minulý' eeee 'o' p";
  }
}

function thisWeek(day: Day) {
  const weekday = accusativeWeekdays[day];

  if (day === 4 /* Thu */) {
    return "'vo' eeee 'o' p";
  } else {
    return "'v " + weekday + " o' p";
  }
}

function nextWeek(day: Day) {
  const weekday = accusativeWeekdays[day];

  switch (day) {
    case 0: /* Sun */
    case 4: /* Wed */
    case 6 /* Sat */:
      return "'budúcu " + weekday + " o' p";
    default:
      return "'budúci' eeee 'o' p";
  }
}

const formatRelativeLocale = {
  lastWeek: <DateType extends Date>(
    date: DateType,
    baseDate: DateType,
    options?: FormatRelativeFnOptions,
  ) => {
    const day = date.getDay() as Day;
    if (isSameWeek(date, baseDate, options)) {
      return thisWeek(day);
    } else {
      return lastWeek(day);
    }
  },
  yesterday: "'včera o' p",
  today: "'dnes o' p",
  tomorrow: "'zajtra o' p",
  nextWeek: <DateType extends Date>(
    date: DateType,
    baseDate: DateType,
    options?: FormatRelativeFnOptions,
  ) => {
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
