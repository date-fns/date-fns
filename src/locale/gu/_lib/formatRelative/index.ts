import type { FormatRelativeFn } from '../../../types'

// Source: https://www.unicode.org/cldr/charts/32/summary/gu.html

const formatRelativeLocale = {
  lastWeek: "'પાછલા' eeee p", // CLDR #1384
  yesterday: "'ગઈકાલે' p", // CLDR #1409
  today: "'આજે' p", // CLDR #1410
  tomorrow: "'આવતીકાલે' p", // CLDR #1411
  nextWeek: 'eeee p', // CLDR #1386
  other: 'P',
}

const formatRelative: FormatRelativeFn = (token, _date, _baseDate, _options) =>
  formatRelativeLocale[token]

export default formatRelative
