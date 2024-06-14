import type { FormatRelativeFn } from "../../../types.js";

const formatRelativeLocale = {
  lastWeek: "'wiki iliyopita' eeee 'saa' p",
  yesterday: "'jana saa' p",
  today: "'leo saa' p",
  tomorrow: "'kesho saa' p",
  nextWeek: "eeee 'saa' p",
  other: "P",
};

export const formatRelative: FormatRelativeFn = (
  token,
  _date,
  _baseDate,
  _options,
) => formatRelativeLocale[token];
