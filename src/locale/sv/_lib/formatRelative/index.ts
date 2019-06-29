var formatRelativeLocale: any = {
  lastWeek: "'i' EEEE's kl.' p",
  yesterday: "'igår kl.' p",
  today: "'idag kl.' p",
  tomorrow: "'imorgon kl.' p",
  nextWeek: "'på' EEEE 'kl.' p",
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
