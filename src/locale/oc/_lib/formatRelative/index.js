var formatRelativeLocale  = {
  lastWeek: "'lo' eeee 'passat a' LT",
  yesterday: "'ièr a' p",
  today: "'uèi a' p",
  tomorrow: "'deman a' p",
  nextWeek: "eeee 'a' p",
  other: 'P'
}

export default function formatRelative(token, _date, _baseDate, _options) {
  return formatRelativeLocale[token]
}
