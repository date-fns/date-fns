var formatRelativeLocale = {
  lastWeek: "'vorige week' eeee 'om' pp",
  yesterday: "'gisteren om' pp",
  today: "'vandaag om' pp",
  tomorrow: "'morgen om' pp",
  nextWeek: "'volgende week' eeee 'om' pp",
  other: 'P'
}

export default function formatRelative (token, date, baseDate, options) {
  return formatRelativeLocale[token]
}
