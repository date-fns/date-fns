var formatRelativeLocale = {
  lastWeek: 'dddd [lepas pada jam] LT',
  yesterday: '[semalam pada jam] LT',
  today: '[hari ini pada jam] LT',
  tomorrow: '[esok pada jam] LT',
  nextWeek: 'dddd [pada jam] LT',
  other: 'L'
}

export default function formatRelative(token, _date, _baseDate, _options) {
  return formatRelativeLocale[token]
}
