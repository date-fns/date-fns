var formatRelativeLocale: any = {
  lastWeek: "'أخر' eeee 'عند' p",
  yesterday: "'أمس عند' p",
  today: "'اليوم عند' p",
  tomorrow: "'غداً عند' p",
  nextWeek: "eeee 'عند' p",
  other: 'P'
}

export default function formatRelative(
  token: any,
  _date: any,
  _baseDate: any,
  _options: any
) {
  return formatRelativeLocale[token]
}
