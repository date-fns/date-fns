var formatRelativeLocale = {
  lastWeek: "'prošli' EEEE 'u' p",
  yesterday: "'jučer u' p",
  today: "'danas u' p",
  tomorrow: "'sutra u' p",
  nextWeek: "'idući' EEEE 'u' p",
  other: 'P'
}

export default function formatRelative(token, _date, _baseDate, _options) {
  return formatRelativeLocale[token]
}
