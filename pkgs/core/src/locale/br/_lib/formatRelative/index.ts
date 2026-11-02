import type { FormatRelativeFn } from "../../../types.ts";

const formatRelativeLocale = {
  lastWeek: "eeee 'diwezhañ da' p",
  yesterday: "'decʼh da' p",
  today: "'hiziv da' p",
  tomorrow: "'warcʼhoazh da' p",
  nextWeek: "eeee 'a zeu da' p",
  other: "P",
};

export const formatRelative: FormatRelativeFn = (
  token,
  _date,
  _baseDate,
  _options,
) => formatRelativeLocale[token];
