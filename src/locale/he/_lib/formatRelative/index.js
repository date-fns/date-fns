var formatRelativeLocale = {
  lastWeek: 'dddd [שעבר ב־]LT',
  yesterday: '[אתמול ב־]LT',
  today: '[היום ב־]LT',
  tomorrow: '[מחר ב־]LT',
  nextWeek: 'dddd [ב־]LT',
  other: 'L'
}

export default function formatRelative (token, date, baseDate, options) {
  return formatRelativeLocale[token]
}
