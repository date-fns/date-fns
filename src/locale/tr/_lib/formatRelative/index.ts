var formatRelativeLocale: any = {
  lastWeek: "'geçen hafta' eeee 'saat' p",
  yesterday: "'dün saat' p",
  today: "'bugün saat' p",
  tomorrow: "'yarın saat' p",
  nextWeek: "eeee 'saat' p",
  other: 'P'
}

export default function formatRelative(token: any, _date: any, _baseDate: any, _options: any) {
  return formatRelativeLocale[token]
}
