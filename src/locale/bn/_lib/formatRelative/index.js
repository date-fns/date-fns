var formatRelativeLocale = {
  lastWeek: "'গত' eeee 'সময়' p",
  yesterday: "'গতকাল' 'সময়' p",
  today: "'আজ' 'সময়' p",
  tomorrow: "'আগামীকাল' 'সময়' p",
  nextWeek: "eeee 'সময়' p",
  other: 'P'
}

export default function formatRelative (token, date, baseDate, options) {
  return formatRelativeLocale[token]
}
