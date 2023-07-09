import formatDistance from '../../../../src/formatDistance'
import { baseDate, dates } from '../_lib/distanceDates'

export default function renderFormatDistance(locale) {
  return `## \`formatDistance\`

If now is January 1st, 2000, 00:00.

| Date | Result | \`includeSeconds: true\` | \`addSuffix: true\` |
|-|-|-|-|
${dates
    .map(date => {
      const dateString = date.toISOString()
      const result = formatDistance(date, baseDate, { locale })
      const resultIncludeSeconds = formatDistance(date, baseDate, {
        locale,
        includeSeconds: true
      })
      const resultAddSuffix = formatDistance(date, baseDate, {
        locale,
        addSuffix: true
      })
      return `| ${dateString} | ${result} | ${resultIncludeSeconds} | ${resultAddSuffix} |`
    })
    .join('\n')}`
}
