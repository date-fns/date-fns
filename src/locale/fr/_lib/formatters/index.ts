const formatters = {}

// Special case for day of month ordinals in long date format context:
// 1er mars, 2 mars, 3 mars, …
// See https://github.com/date-fns/date-fns/issues/437
const monthsTokens = ['MMM', 'MMMM']
monthsTokens.forEach(function (monthToken) {
  formatters['Do ' + monthToken] = function (date, options) {
    const commonFormatters = options.formatters
    const dayOfMonthToken = date.getUTCDate() === 1 ? 'Do' : 'D'
    const dayOfMonthFormatter = commonFormatters[dayOfMonthToken]
    const monthFormatter = commonFormatters[monthToken]
    return dayOfMonthFormatter(date, options) + ' ' + monthFormatter(date, options)
  }
})

export default formatters
