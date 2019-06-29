var formatRelativeLocale: any = {
  lastWeek: "'el' eeee 'passat a la' LT",
  yesterday: "'ahir a la' p",
  today: "'avui a la' p",
  tomorrow: "'demà a la' p",
  nextWeek: "eeee 'a la' p",
  other: 'P'
}

var formatRelativeLocalePlural: any = {
  lastWeek: "'el' eeee 'passat a les' p",
  yesterday: "'ahir a les' p",
  today: "'avui a les' p",
  tomorrow: "'demà a les' p",
  nextWeek: "eeee 'a les' p",
  other: 'P'
}

export default function formatRelative(token: any, date: any, _baseDate: any, _options: any) {
  if (date.getUTCHours() !== 1) {
    return formatRelativeLocalePlural[token]
  }
  return formatRelativeLocale[token]
}
