import type { FormatRelativeFn } from "../../../types.js";

const formatRelativeLocale = {
  lastWeek: (date: Date) => {
    switch (date.getDay()) {
      case 0:
        return "'prošle nedjelje u' p";
      case 3:
        return "'prošle srijede u' p";
      case 6:
        return "'prošle subote u' p";
      default:
        return "'prošli' EEEE 'u' p";
    }
  },
  yesterday: "'juče u' p",
  today: "'danas u' p",
  tomorrow: "'sutra u' p",
  nextWeek: (date: Date) => {
    switch (date.getDay()) {
      case 0:
        return "'sljedeće nedjelje u' p";
      case 3:
        return "'sljedeću srijedu u' p";
      case 6:
        return "'sljedeću subotu u' p";
      default:
        return "'sljedeći' EEEE 'u' p";
    }
  },
  other: "P",
};

export const formatRelative: FormatRelativeFn = (
  token,
  date,
  _baseDate,
  _options,
) => {
  const format = formatRelativeLocale[token];

  if (typeof format === "function") {
    return format(date);
  }

  return format;
};
