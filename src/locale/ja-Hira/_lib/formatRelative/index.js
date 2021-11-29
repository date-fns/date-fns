var formatRelativeLocale = {
  lastWeek: 'せんしゅうのeeeeのp',
  yesterday: 'きのうのp',
  today: 'きょうのp',
  tomorrow: 'あしたのp',
  nextWeek: 'よくしゅうのeeeeのp',
  other: 'P',
}

export default function formatRelative(token, _date, _baseDate, _options) {
  return formatRelativeLocale[token]
}
