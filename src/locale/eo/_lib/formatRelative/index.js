var formatRelativeLocale = {
  lastWeek: '[pasinta] dddd [je] LT',
  yesterday: '[hieraŭ je] LT',
  today: '[hodiaŭ je] LT',
  tomorrow: '[morgaŭ je] LT',
  nextWeek: 'dddd [je] LT',
  other: 'L'
}

export default function formatRelative (token, date, baseDate, options) {
  return formatRelativeLocale[token]
}
