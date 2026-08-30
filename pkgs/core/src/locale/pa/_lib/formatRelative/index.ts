import type { FormatRelativeFn } from "../../../types.ts";

const formatRelativeLocale = {
  lastWeek: "'ਪਿਛਲੇ' eeee p",
  yesterday: "'ਬੀਤਿਆ ਕੱਲ੍ਹ' p",
  today: "'ਅੱਜ' p",
  tomorrow: "'ਭਲਕੇ' p",
  nextWeek: "'ਅਗਲੇ' eeee p",
  other: "P",
};

export const formatRelative: FormatRelativeFn = (
  token,
  _date,
  _baseDate,
  _options,
) => formatRelativeLocale[token];
