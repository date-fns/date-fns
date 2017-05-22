var commonTokenKeys = [
  'x', 'ss', 's', 'mm', 'm', 'hh', 'h', 'do', 'dddd',
  'ddd', 'dd', 'd', 'aa', 'a', 'ZZ', 'Z', 'YYYY', 'YY',
  'X', 'Wo', 'WW', 'W', 'SSS', 'SS', 'S', 'Qo', 'Q', 'Mo',
  'MMMM', 'MMM', 'MM', 'M', 'HH', 'H', 'GGGG', 'GG', 'E',
  'Do', 'DDDo', 'DDDD', 'DDD', 'DD', 'D', 'A'
]

/**
 * @name buildTokensRegExp
 * @category Locale Helpers
 * @summary Build `formattingTokensRegExp` or `parsingTokensRegExp` property for locale.
 *
 * @description
 * Build `formattingTokensRegExp` or `parsingTokensRegExp` property for locales.
 * Takes `formatters` or `parsers` property respectively (if there's one for the locale).
 * Resulting RegExp is used to split the `format` or `parse` token string into tokens.
 *
 * @param {Object} tokensObject - `formatters` or `parsers` property of the locale
 * @returns {RegExp} `formattingTokensRegExp` or `parsingTokensRegExp` property of the locale
 *
 * @example
 * locale.formatters = {
 *   YYYYY: function (date, options) {
 *     var year = date.getUTCFullYear
 *     if (year > 0) {
 *       return year + 'A.D.'
 *     } else {
 *       return year + 'B.C.'
 *     }
 *   }
 * }
 * locale.formattingTokensRegExp = buildTokensRegExp(locale.formatters)
 */
export default function buildTokensRegExp (tokensObject) {
  var tokenKeys = []
  for (var key in tokensObject) {
    if (tokensObject.hasOwnProperty(key)) {
      tokenKeys.push(key)
    }
  }

  var tokens = commonTokenKeys
    .concat(tokenKeys)
    .sort()
    .reverse()
  var tokensRegExp = new RegExp(
    '(\\[[^\\[]*\\])|(\\\\)?' + '(' + tokens.join('|') + '|.)', 'g'
  )

  return tokensRegExp
}
