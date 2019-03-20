var formatRelativeLocale = {
  lastWeek: "'poslední' eeee 've' p",
  yesterday: "'včera v' p",
  today: "'dnes v' p",
  tomorrow: "'zítra v' p",
  nextWeek: "'v' eeee 'o' p",
  other: 'P'
}

export default function formatRelative(token, date, baseDate, options) {
  return formatRelativeLocale[token]
}
