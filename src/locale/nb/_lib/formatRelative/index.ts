var formatRelativeLocale: any = {
  lastWeek: "'forrige' eeee 'kl.' p",
  yesterday: "'i går kl.' p",
  today: "'i dag kl.' p",
  tomorrow: "'i morgen kl.' p",
  nextWeek: "EEEE 'kl.' p",
  other: 'P'
}

export default function formatRelative(token: any, _date: any, _baseDate: any, _options: any) {
  return formatRelativeLocale[token]
}
