import formatDuration from '../../../../src/formatDuration'

export const durations = [
  { years: 0, months: 0, weeks: 0, days: 0, hours: 0, minutes: 0, seconds: 0 },
  { years: 1, months: 1, weeks: 1, days: 1, hours: 1, minutes: 1, seconds: 1 },
  { years: 2, months: 2, weeks: 2, days: 2, hours: 2, minutes: 2, seconds: 2 },
]

export default function renderFormatDurationStrict(locale) {
  return `## \`formatDuration\`

| Duration | Result |
|-|-|
${durations
  .map((duration) => {
    const durationString = JSON.stringify(duration)
    try {
      const result = formatDuration(duration, { locale, zero: true })
      return `| ${durationString} | ${result} |`
    } catch {
      return `| ${durationString} | not supported |`
    }
  })
  .join('\n')}`
}
