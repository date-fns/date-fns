import type { FormatRelativeFn } from "../../../types.ts";

const formatRelativeLocale = {
  lastWeek: "eeee 'lasa teo tamin''ny' p",
  yesterday: "'omaly tamin''ny' p",
  today: "'anio tamin''ny' p",
  tomorrow: "'rahampitso tamin''ny' p",
  nextWeek: "eeee 'manaraka tamin''ny' p",
  other: "P",
};

export const formatRelative: FormatRelativeFn = (
  token,
  _date,
  _baseDate,
  _options,
) => formatRelativeLocale[token];
