var formatRelativeLocale: any = {
  lastWeek: 'dddd [lepas pada jam] LT',
  yesterday: '[semalam pada jam] LT',
  today: '[hari ini pada jam] LT',
  tomorrow: '[esok pada jam] LT',
  nextWeek: 'dddd [pada jam] LT',
  other: 'L'
}

export default function formatRelative(token: any, _date: any, _baseDate: any, _options: any) {
  return formatRelativeLocale[token]
}
