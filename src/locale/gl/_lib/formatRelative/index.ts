var formatRelativeLocale: any = {
  lastWeek: "'o' eeee 'pasado á' LT",
  yesterday: "'onte á' p",
  today: "'hoxe á' p",
  tomorrow: "'mañá á' p",
  nextWeek: "eeee 'á' p",
  other: 'P'
}

var formatRelativeLocalePlural: any = {
  lastWeek: "'o' eeee 'pasado ás' p",
  yesterday: "'onte ás' p",
  today: "'hoxe ás' p",
  tomorrow: "'mañá ás' p",
  nextWeek: "eeee 'ás' p",
  other: 'P'
}

export default function formatRelative(token: any, date: any, _baseDate: any, _options: any) {
  if (date.getUTCHours() !== 1) {
    return formatRelativeLocalePlural[token]
  }
  return formatRelativeLocale[token]
}
