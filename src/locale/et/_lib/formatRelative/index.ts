import type { FormatRelativeFn } from '../../../types'

const formatRelativeLocale = {
  lastWeek: "'eelmine' eeee 'kell' p",
  yesterday: "'eile kell' p",
  today: "'täna kell' p",
  tomorrow: "'homme kell' p",
  nextWeek: "'järgmine' eeee 'kell' p",
  other: 'P',
}

const formatRelative: FormatRelativeFn = (token) => formatRelativeLocale[token]

export default formatRelative
