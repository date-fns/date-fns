var formatRelativeLocale = {
  lastWeek: "'oldingi' eeee p 'da'",
  yesterday: "'kecha' p 'da'",
  today: "'bugun' p 'da'",
  tomorrow: "'ertaga' p 'da'",
  nextWeek: "eeee p 'da'",
  other: 'P'
}

export default function formatRelative(token, _date, _baseDate, _options) {
  return formatRelativeLocale[token]
}
