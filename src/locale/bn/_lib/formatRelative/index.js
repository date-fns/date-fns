var formatRelativeLocale = {
  lastWeek: "'গত' eeee p 'টায়'",
  yesterday: "'গতকাল' p 'টায়'",
  today: "'আজ' p 'টায়'",
  tomorrow: "'আগামীকাল' p 'টায়'",
  nextWeek: "eeee p 'টায়'",
  other: 'P'
}

export default function formatRelative (token, date, baseDate, options) {
  return formatRelativeLocale[token]
}
