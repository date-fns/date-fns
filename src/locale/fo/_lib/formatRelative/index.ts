import type { FormatRelativeFn } from "../../../types.ts";

const formatRelativeLocale = {
  lastWeek: "'seinasta' eeee 'kl.' p",
  yesterday: "'í gjár kl.' p",
  today: "'í dag kl.' p",
  tomorrow: "'í morgin kl.' p",
  nextWeek: "eeee 'kl.' p",
  other: "P",
};

export const formatRelative: FormatRelativeFn = (
  token,
  _date,
  _baseDate,
  _options,
) => formatRelativeLocale[token];
