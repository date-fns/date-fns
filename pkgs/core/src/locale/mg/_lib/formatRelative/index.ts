import type { FormatRelativeFn } from "../../../types.ts";

const formatRelativeLocale = {
  lastWeek: "'Tamin''ny' eeee 'tamin''ny' p",
  yesterday: "'Omaly tamin''ny' p",
  today: "'Anio amin''ny' p",
  tomorrow: "'Rahampitso amin''ny' p",
  nextWeek: "eeee 'amin''ny' p",
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
