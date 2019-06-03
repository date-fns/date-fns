var formatRelativeLocale = {
  lastWeek: '先週のeeeeのp',
  yesterday: '昨日のp',
  today: '今日のp',
  tomorrow: '明日のp',
  nextWeek: '翌週のeeeeのp',
  other: 'P'
}

export default function formatRelative (token, date, baseDate, options) {
  return formatRelativeLocale[token]
}
