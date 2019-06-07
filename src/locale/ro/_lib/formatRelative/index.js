var formatRelativeLocale = {
  lastWeek: "eeee 'trecută la' p",
  yesterday: "'ieri la' p",
  today: "'astăzi la' p",
  tomorrow: "'mâine la' p",
  nextWeek: "eeee 'viitoare la' p",
  other: 'P'
}

export default function formatRelative(token, date, baseDate, options) {
  return formatRelativeLocale[token]
}
