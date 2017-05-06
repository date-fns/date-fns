var commonTokenKeys = [
  'x', 'ss', 's', 'mm', 'm', 'hh', 'h', 'do', 'dddd',
  'ddd', 'dd', 'd', 'aa', 'a', 'ZZ', 'Z', 'YYYY', 'YY',
  'X', 'Wo', 'WW', 'W', 'SSS', 'SS', 'S', 'Qo', 'Q', 'Mo',
  'MMMM', 'MMM', 'MM', 'M', 'HH', 'H', 'GGGG', 'GG', 'E',
  'Do', 'DDDo', 'DDDD', 'DDD', 'DD', 'D', 'A'
]

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
