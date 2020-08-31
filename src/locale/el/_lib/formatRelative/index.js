var formatRelativeLocale = {
  lastWeek: function(date) {
    switch (date.getUTCDay()) {
      case 6: //Σάββατο
        return "'το προηγούμενο' eeee 'στις' p"
      default:
        return "'την προηγούμενη' eeee 'στις' p"
    }
  },
  yesterday: "'χθες στις' p",
  today: "'σήμερα στις' p",
  tomorrow: "'αύριο στις' p",
  nextWeek: "eeee 'στις' p",
  other: 'P'
}

export default function formatRelative(token, date, baseDate, options) {
  var format = formatRelativeLocale[token]

  if (typeof format === 'function') return format(date, baseDate, options)

  return format
}
