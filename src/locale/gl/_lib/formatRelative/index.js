var formatRelativeLocale = {
  lastWeek: "'o' eeee 'pasado á' LT",
  yesterday: "'onte á' p",
  today: "'hoxe á' p",
  tomorrow: "'mañá á' p",
  nextWeek: "eeee 'á' p",
  other: 'P'
}

var formatRelativeLocalePlural = {
  lastWeek: "'el' eeee 'pasado ás' p",
  yesterday: "'onte ás' p",
  today: "'hoxe ás' p",
  tomorrow: "'mañá ás' p",
  nextWeek: "eeee 'ás' p",
  other: 'P'
}

export default function formatRelative (token, date, baseDate, options) {
  if (date.getHours() !== 1) {
    return formatRelativeLocalePlural[token]
  }
  return formatRelativeLocale[token]
}
