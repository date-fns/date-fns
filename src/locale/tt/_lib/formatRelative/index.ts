import type {
  FormatRelativeFn
} from "../../../types.ts";

const formatRelativeLocale = {
  lastWeek: "'узган' eeee 'көнне' p 'дә'",
  yesterday: "'кичә' p 'дә'",
  today: "'бүген' p 'дә'",
  tomorrow: "'иртәгә' p 'дә'",
  nextWeek: "eeee 'көнне' p 'дә'",
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

