var formatRelativeLocale = {
  lastWeek: '[Praėjusį] dddd LT',
  yesterday: '[Vakar] LT',
  today: '[Šiandien] LT',
  tomorrow: '[Rytoj] LT',
  nextWeek: 'dddd LT',
  other: 'L'
}

export default function formatRelative (token, date, baseDate, options) {
  return formatRelativeLocale[token]
}
