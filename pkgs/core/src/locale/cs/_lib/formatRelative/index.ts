import type { Day } from "../../../../types.ts";
import type { FormatRelativeFn } from "../../../types.ts";

const accusativeWeekdays = [
  "neděli",
  "pondělí",
  "úterý",
  "středu",
  "čtvrtek",
  "pátek",
  "sobotu",
];

function getTimePreposition(date: Date): string {
  const hour = date.getHours();
  const VE_HOURS = new Set([2, 3, 4, 12, 13, 14, 20, 21, 22, 23]);
  return VE_HOURS.has(hour) ? "ve" : "v";
}

function getDayPreposition(date: Date): string {
  const day = date.getDay() as Day;
  const VE_DAYS = new Set([3, 4]);
  return VE_DAYS.has(day) ? "ve" : "v";
}

const formatRelativeLocale = {
  lastWeek: (date: Date) => `'poslední' eeee '${getTimePreposition(date)}' p`,
  yesterday: (date: Date) => `'včera ${getTimePreposition(date)}' p`,
  today: (date: Date) => `'dnes ${getTimePreposition(date)}' p`,
  tomorrow: (date: Date) => `'zítra ${getTimePreposition(date)}' p`,
  nextWeek: (date: Date) => {
    const day = date.getDay() as Day;
    return `'${getDayPreposition(date)} ${accusativeWeekdays[day]} ${getTimePreposition(date)}' p`;
  },
  other: "P",
};

export const formatRelative: FormatRelativeFn = (token, date) => {
  const format = formatRelativeLocale[token];

  if (typeof format === "function") {
    return format(date);
  }

  return format;
};
