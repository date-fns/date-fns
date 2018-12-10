var formatRelativeLocale = {
  lastWeek: "'i' EEEE's kl.' p",
  yesterday: "'igår kl.' p",
  today: "'idag kl.' p",
  tomorrow: "'imorgon kl.' p",
  nextWeek: "'på' EEEE 'kl.' p",
  other: 'P'
}

export default function formatRelative (token, date, baseDate, options) {
  return formatRelativeLocale[token]
}
