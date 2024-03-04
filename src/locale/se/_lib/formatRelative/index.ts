import type { FormatRelativeFn } from "../../../types.js";

const formatRelativeLocale = {
  lastWeek: "'ovddit' eeee 'dii.' p",
  yesterday: "'ikte dii.' p",
  today: "'odne dii.' p",
  tomorrow: "'ihtin dii.' p",
  nextWeek: "EEEE 'dii.' p",
  other: "P",
};

export const formatRelative: FormatRelativeFn = (
  token,
  _date,
  _baseDate,
  _options,
) => formatRelativeLocale[token];
