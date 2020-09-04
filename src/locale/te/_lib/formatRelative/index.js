// Source: https://www.unicode.org/cldr/charts/32/summary/te.html

var formatRelativeLocale = {
  lastWeek: "'గత' eeee p", // CLDR #1384
  yesterday: "'నిన్న' p", // CLDR #1393
  today: "'ఈ రోజు' p", // CLDR #1394
  tomorrow: "'రేపు' p", // CLDR #1395
  nextWeek: "'తదుపరి' eeee p", // CLDR #1386
  other: 'P'
}

export default function formatRelative(token, _date, _baseDate, _options) {
  return formatRelativeLocale[token]
}
