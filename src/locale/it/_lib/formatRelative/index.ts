var formatRelativeLocale: any = {
  lastWeek: "eeee 'scorso alle' p",
  yesterday: "'ieri alle' p",
  today: "'oggi alle' p",
  tomorrow: "'domani alle' p",
  nextWeek: "eeee 'alle' p",
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
