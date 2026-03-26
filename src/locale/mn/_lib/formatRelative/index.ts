import type { FormatRelativeFn } from "../../../types.ts";

const formatRelativeLocale = {
  lastWeek: "'өнгөрсөн' eeee 'гарагийн' p 'цагт'",
  yesterday: "'өчигдөр' p 'цагт'",
  today: "'өнөөдөр' p 'цагт'",
  tomorrow: "'маргааш' p 'цагт'",
  nextWeek: "'ирэх' eeee 'гарагийн' p 'цагт'",
  other: "P",
};

export const formatRelative: FormatRelativeFn = (
  token,
  _date,
  _baseDate,
  _options,
) => formatRelativeLocale[token];
