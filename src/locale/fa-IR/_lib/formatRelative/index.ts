import type { FormatRelativeFn } from "../../../types.js";

const formatRelativeLocale = {
  lastWeek: "eeee 'گذشته در' p",
  yesterday: "'دیروز در' p",
  today: "'امروز در' p",
  tomorrow: "'فردا در' p",
  nextWeek: "eeee 'در' p",
  other: "P",
};

export const formatRelative: FormatRelativeFn = (
  token,
  _date,
  _baseDate,
  _options,
) => formatRelativeLocale[token];
