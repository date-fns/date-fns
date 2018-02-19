var formatRelativeLocale = {
  lastWeek: "'pasinta' eeee 'je' p",
  yesterday: "'hieraŭ je' p",
  today: "'hodiaŭ je' p",
  tomorrow: "'morgaŭ je' p",
  nextWeek: "eeee 'je' p",
  other: 'P'
}

export default function formatRelative (token, date, baseDate, options) {
  return formatRelativeLocale[token]
}
