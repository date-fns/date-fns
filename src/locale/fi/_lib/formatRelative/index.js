var formatRelativeLocale = {
  lastWeek: '[viime] eeee[na] [klo] LT',
  yesterday: '[eilen klo] LT',
  today: '[tänään klo] LT',
  tomorrow: '[huomenna klo] LT',
  nextWeek: 'eeee [klo] LT',
  other: 'P'
}

export default function formatRelative (token, date, baseDate, options) {
  return formatRelativeLocale[token]
}
