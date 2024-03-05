import type { Day } from "../../../../types.js";
import type { FormatRelativeFn } from "../../../types.js";

const accusativeWeekdays = [
  "neděli",
  "pondělí",
  "úterý",
  "středu",
  "čtvrtek",
  "pátek",
  "sobotu",
];

const formatRelativeLocale = {
  lastWeek: "'poslední' eeee 've' p",
  yesterday: "'včera v' p",
  today: "'dnes v' p",
  tomorrow: "'zítra v' p",
  nextWeek: (date: Date) => {
    const day = date.getDay() as Day;
    return "'v " + accusativeWeekdays[day] + " o' p";
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
