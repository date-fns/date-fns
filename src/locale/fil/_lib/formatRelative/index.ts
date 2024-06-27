import type { FormatRelativeFn } from "../../../types.js";

const formatRelativeLocale = {
  lastWeek: "'nakaraang' eeee 'nang' p",
  yesterday: "'kahapon nang' p",
  today: "'ngayon nang' p",
  tomorrow: "'bukas nang' p",
  nextWeek: "eeee 'nang' p",
  other: "P",
};

export const formatRelative: FormatRelativeFn = (
  token,
  _date,
  _baseDate,
  _options,
) => formatRelativeLocale[token];