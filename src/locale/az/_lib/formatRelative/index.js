var formatRelativeLocale = {
  lastWeek: "'sonuncu' eeee p -'də'",
  yesterday: "'dünən' p -'də'",
  today: "'bugün' p -'də'",
  tomorrow: "'sabah' p -'də'",
  nextWeek: "eeee p -'də'",
  other: 'P'
}

export default function formatRelative(token, _date, _baseDate, _options) {
  return formatRelativeLocale[token]
}
