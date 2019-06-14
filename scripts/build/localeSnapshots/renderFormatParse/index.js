import format from '../../../../src/format'
import isValid from '../../../../src/isValid'
import parse from '../../../../src/parse'
import toDate from '../../../../src/toDate'
import formatParseTokens from './formatParseTokens'

export default function renderFormatParse(locale) {
  return `## \`format\` and \`parse\`

| Title | Token string | Date | \`format\` result | \`parse\` result | Equals |
|-|-|-|-|-|-|
${formatParseTokens
  .map(({ title, tokens, dates, options = {}, skipParse }) => {
    return tokens
      .map((token, tokenIndex) => {
        return dates
          .map((date, dateIndex) => {
            const dateString = toDate(date).toISOString()
            const formatResult = format(
              date,
              token,
              Object.assign({ locale }, options)
            )
            let parsedDate
            try {
              parsedDate =
                !skipParse &&
                parse(
                  formatResult,
                  token,
                  date,
                  Object.assign({ locale }, options)
                )
            } catch (_err) {
              parsedDate = 'Errored'
            }

            const parseResult = skipParse
              ? 'NA'
              : parsedDate === 'Errored'
              ? parsedDate
              : isValid(parsedDate)
              ? parsedDate.toISOString()
              : 'Invalid Date'
            const equals = skipParse
              ? 'NA'
              : dateString === parseResult
              ? '✅'
              : '❌'

            if (dateIndex === 0 && tokenIndex === 0) {
              return `| ${title} | ${token} | ${dateString} | ${formatResult} | ${parseResult} | ${equals} |`
            } else if (dateIndex === 0) {
              return `| | ${token} | ${dateString} | ${formatResult} | ${parseResult} | ${equals} |`
            } else {
              return `| | | ${dateString} | ${formatResult} | ${parseResult} | ${equals} |`
            }
          })
          .join('\n')
      })
      .join('\n')
  })
  .join('\n')}`
}
