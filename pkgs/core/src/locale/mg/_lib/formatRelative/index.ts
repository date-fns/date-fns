import type { FormatRelativeFn } from "../../../types.js";

const formatRelativeLocale = {
  lastWeek: "'tamin''ny' eeee 'heriny tamin''ny' p",
  yesterday: "'omaly tamin''ny' p",
  today: "'androany amin''ny' p",
  tomorrow: "'rahampitso amin''ny' p",
  nextWeek: "'amin''ny' eeee 'heriny amin''ny' p",
  other: "P",
};

export const formatRelative: FormatRelativeFn = (
  token,
  _date,
  _baseDate,
  _options,
) => formatRelativeLocale[token];
