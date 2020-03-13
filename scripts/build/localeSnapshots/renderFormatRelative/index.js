import formatRelative from '../../../../src/formatRelative'
import { baseDate, relativeDates } from '../_lib/distanceDates'

export default function renderFormatRelative(locale) {
  return `## \`formatRelative\`

If now is January 1st, 2000, 00:00.

| Date | Result |
|-|-|
${relativeDates
    .map(date => {
      const dateString = date.toISOString()
      let result
      try {
        result = formatRelative(date, baseDate, { locale })
      } catch (_err) {
        result = 'Errored'
      }
      return `| ${dateString} | ${result} |`
    })
    .join('\n')}`
}
