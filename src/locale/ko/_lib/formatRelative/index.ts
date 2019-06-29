var formatRelativeLocale: any = {
  lastWeek: "'지난' eeee p",
  yesterday: "'어제' p",
  today: "'오늘' p",
  tomorrow: "'내일' p",
  nextWeek: "'다음' eeee p",
  other: 'P'
}

export default function formatRelative(token: any, _date: any, _baseDate: any, _options: any) {
  return formatRelativeLocale[token]
}
