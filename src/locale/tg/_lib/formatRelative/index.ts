import type { FormatRelativeFn } from '../../../types';

const formatRelativeLocale = {
  lastWeek: "eeee'и гузашта соати' p",
  yesterday: "'дирӯз соати' p",
  today: "'имрӯз соати' p",
  tomorrow: "'фардо соати' p",
  nextWeek: "eeee'и оянда соати' p",
  other: 'P',
};

const formatRelative: FormatRelativeFn = (token, _date, _baseDate, _options) =>
  formatRelativeLocale[token];

export default formatRelative;
