import type { FormatRelativeFn } from '../../../types'

// Source: https://www.unicode.org/cldr/charts/32/summary/te.html

const formatRelativeLocale = {
  lastWeek: "'గత' eeee p", // CLDR #1384
  yesterday: "'నిన్న' p", // CLDR #1393
  today: "'ఈ రోజు' p", // CLDR #1394
  tomorrow: "'రేపు' p", // CLDR #1395
  nextWeek: "'తదుపరి' eeee p", // CLDR #1386
  other: 'P',
}

const formatRelative: FormatRelativeFn = (token, _date, _baseDate, _options) =>
  formatRelativeLocale[token]

export default formatRelative
