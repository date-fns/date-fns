var formatRelativeLocale: any = {
  lastWeek: "'eelmine' eeee 'kell' p",
  yesterday: "'eile kell' p",
  today: "'täna kell' p",
  tomorrow: "'homme kell' p",
  nextWeek: "'järgmine' eeee 'kell' p",
  other: 'P'
}

export default function formatRelative(token: any, _date: any, _baseDate: any, _options: any) {
  return formatRelativeLocale[token]
}
