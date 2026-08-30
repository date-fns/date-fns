import type { FormatRelativeFn } from "../../../types.ts";

const formatRelativeLocale = {
  lastWeek: "'dan' eeee 'na' p",
  yesterday: "'dandag na' p",
  today: "'imadag na' p",
  tomorrow: "'mirajdag na' p",
  nextWeek: "eeee 'na' p",
  other: "P",
};

export const formatRelative: FormatRelativeFn = (
  token,
  _date,
  _baseDate,
  _options,
) => formatRelativeLocale[token];
