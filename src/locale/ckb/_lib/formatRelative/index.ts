import type { FormatRelativeFn } from "../../../types.js";

const formatRelativeLocale = {
  lastWeek: "'هەفتەی ڕابردوو' eeee 'کاتژمێر' p",
  yesterday: "'دوێنێ کاتژمێر' p",
  today: "'ئەمڕۆ کاتژمێر' p",
  tomorrow: "'بەیانی کاتژمێر' p",
  nextWeek: "eeee 'کاتژمێر' p",
  other: "P",
};

export const formatRelative: FormatRelativeFn = (
  token,
  _date,
  _baseDate,
  _options,
) => formatRelativeLocale[token];
