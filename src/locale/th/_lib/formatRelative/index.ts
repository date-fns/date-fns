var formatRelativeLocale: any = {
  lastWeek: "eeee'ที่แล้วเวลา' p",
  yesterday: "'เมื่อวานนี้เวลา' p",
  today: "'วันนี้เวลา' p",
  tomorrow: "'พรุ่งนี้เวลา' p",
  nextWeek: "eeee 'เวลา' p",
  other: 'P'
}

export default function formatRelative(
  token: any,
  _date: any,
  _baseDate: any,
  _options: any
) {
  return formatRelativeLocale[token]
}
