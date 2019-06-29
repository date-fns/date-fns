var formatRelativeLocale: any = {
  lastWeek: "'el' eeee 'pasado a la' LT",
  yesterday: "'ayer a la' p",
  today: "'hoy a la' p",
  tomorrow: "'mañana a la' p",
  nextWeek: "eeee 'a la' p",
  other: 'P'
}

var formatRelativeLocalePlural: any = {
  lastWeek: "'el' eeee 'pasado a las' p",
  yesterday: "'ayer a las' p",
  today: "'hoy a las' p",
  tomorrow: "'mañana a las' p",
  nextWeek: "eeee 'a las' p",
  other: 'P'
}

export default function formatRelative(token: any, date: any, _baseDate: any, _options: any) {
  if (date.getUTCHours() !== 1) {
    return formatRelativeLocalePlural[token]
  }
  return formatRelativeLocale[token]
}
