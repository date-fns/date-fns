var formatRelativeLocale = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'أمس عند' p",
  today: "'اليوم عند' p",
  tomorrow: "'غداً عند' p",
  nextWeek: "eeee 'at' p",
  other: 'P'
}

export default function formatRelative(token, date, baseDate, options) {
  return formatRelativeLocale[token]
}
