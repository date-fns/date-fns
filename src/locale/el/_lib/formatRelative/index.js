var formatRelativeLocale = {
  lastWeek: "'την προηγούμενη' eeee 'στις' p",
  yesterday: "'χθες στις' p",
  today: "'σήμερα στις' p",
  tomorrow: "'αύριο στις' p",
  nextWeek: "eeee 'στις' p",
  other: 'P'
}

export default function formatRelative(token, date, baseDate, options) {
  return formatRelativeLocale[token]
}
