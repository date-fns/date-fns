var formatRelativeLocale = {
  lastWeek: "eeee 'گذشته،' 'ساعت' p",
  yesterday: "'دیروز، ساعت' p",
  today: "'امروز، ساعت' p",
  tomorrow: "'فردا، ساعت' p",
  nextWeek: "eeee'، ساعت' p",
  other: 'P'
}

export default function formatRelative(token, date, baseDate, options) {
  return formatRelativeLocale[token]
}
