var formatRelativeLocale: any = {
  lastWeek: "'afgelopen' eeee 'om' p",
  yesterday: "'gisteren om' p",
  today: "'vandaag om' p",
  tomorrow: "'morgen om' p",
  nextWeek: "eeee 'om' p",
  other: 'P'
}

export default function formatRelative(token: any, _date: any, _baseDate: any, _options: any) {
  return formatRelativeLocale[token]
}
