var formatRelativeLocale: any = {
  lastWeek: "'verlede' eeee 'om' p",
  yesterday: "'gister om' p",
  today: "'vandag om' p",
  tomorrow: "'môre om' p",
  nextWeek: "eeee 'om' p",
  other: 'P'
}

export default function formatRelative(token: any) {
  return formatRelativeLocale[token]
}
