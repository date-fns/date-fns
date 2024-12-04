import type { FormatRelativeFn } from "../../../types.js";

const formatRelativeLocale = {
  lastWeek: "せんしゅうのeeeeのp",
  yesterday: "きのうのp",
  today: "きょうのp",
  tomorrow: "あしたのp",
  nextWeek: "よくしゅうのeeeeのp",
  other: "P",
};

export const formatRelative: FormatRelativeFn = (
  token,
  _date,
  _baseDate,
  _options,
) => {
  return formatRelativeLocale[token];
};
