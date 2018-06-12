var formatRelativeLocale = {
  lastWeek: "dddd 'dernier à' LT",
  yesterday: "'hier à' LT",
  today: "'aujourd’hui à' LT",
  tomorrow: "'demain à' LT'",
  nextWeek: "dddd 'prochain à' LT",
  other: 'L'
}

export default function formatRelative (token, date, baseDate, options) {
  return formatRelativeLocale[token]
}
