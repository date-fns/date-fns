import type { FormatRelativeFn } from "../../../types.ts";

const formatRelativeLocale = {
  lastWeek: "'گزرا ہوا ہفتہ' p",
  yesterday: "'گزرا ہوا دن' p",
  today: "'آج' p",
  tomorrow: "'آنے والا دن' p",
  nextWeek: "'آنے والا ہفتہ' p",
  other: "P",
};

export const formatRelative: FormatRelativeFn = (token) =>
  formatRelativeLocale[token];