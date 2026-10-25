import type { Day } from "../../../../types.ts";
import type { FormatRelativeFn } from "../../../types.ts";

const accusativeWeekdays = [
  "dielën",
  "hënën",
  "martën",
  "mërkurën",
  "enjten",
  "premten",
  "shtunën",
] as const;

const formatRelativeLocale = {
  lastWeek: (day: Day) => "'të " + accusativeWeekdays[day] + " e kaluar në' p",
  yesterday: "'dje në' p",
  today: "'sot në' p",
  tomorrow: "'nesër në' p",
  nextWeek: (day: Day) => "'të " + accusativeWeekdays[day] + " në' p",
  other: "P",
};

export const formatRelative: FormatRelativeFn = (
  token,
  date,
  _baseDate,
  _options,
) => {
  const format = formatRelativeLocale[token];

  if (typeof format === "function") {
    return format(date.getDay() as Day);
  }

  return format;
};
