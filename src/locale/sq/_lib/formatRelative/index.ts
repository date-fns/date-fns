import type { FormatRelativeFn } from "../../../types.js";

const formatRelativeLocale = {
  lastWeek: "'të' eeee 'e shkuar në' p",
  yesterday: "'dje në' p",
  today: "'sot në' p",
  tomorrow: "'nesër në' p",
  nextWeek: "eeee 'at' p",
  other: "P",
};

export const formatRelative: FormatRelativeFn = (
  token,
  _date,
  _baseDate,
  _options,
) => formatRelativeLocale[token];
