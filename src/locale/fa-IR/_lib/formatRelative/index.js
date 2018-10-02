var formatRelativeLocale = {
  lastWeek: "'پیش' eeee 'در' p",
  yesterday: "'دیروز at' p",
  today: "'امروز در' p",
  tomorrow: "'فردا در' p",
  nextWeek: "eeee 'در' p",
  other: 'P'
}

export default function formatRelative (token, date, baseDate, options) {
  return formatRelativeLocale[token]
}
