var formatRelativeLocale = {
  lastWeek: "'førre' eeee 'kl.' p",
  yesterday: "'i går kl.' p",
  today: "'i dag kl.' p",
  tomorrow: "'i morgon kl.' p",
  nextWeek: "EEEE 'kl.' p",
  other: 'P'
}

export default function formatRelative(token, _date, _baseDate, _options) {
  return formatRelativeLocale[token]
}
