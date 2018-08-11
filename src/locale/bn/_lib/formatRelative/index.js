var formatRelativeLocale = {
  lastWeek: "'গত' eeee p 'টা'",
  yesterday: "'গতকাল' p 'টা'",
  today: "'আজ' p 'টা'",
  tomorrow: "'আগামীকাল' p 'টা'",
  nextWeek: "eeee p 'টা'",
  other: 'P'
}

export default function formatRelative (token, date, baseDate, options) {
  return formatRelativeLocale[token]
}
