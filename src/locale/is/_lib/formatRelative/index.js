var formatRelativeLocale = {
  lastWeek: "'síðasta' dddd 'kl.' p",
  yesterday: "'í gær kl.' p",
  today: "'í dag kl.' p",
  tomorrow: "'á morgun kl.' p",
  nextWeek: "dddd 'kl.' p",
  other: 'L'
}

export default function formatRelative (token, date, baseDate, options) {
  return formatRelativeLocale[token]
}
