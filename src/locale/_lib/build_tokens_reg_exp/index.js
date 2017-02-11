var commonTokenKeys = [
  'M', 'MM', 'Q', 'D', 'DD', 'DDD', 'DDDD', 'd',
  'E', 'W', 'WW', 'YY', 'YYYY', 'GG', 'GGGG',
  'H', 'HH', 'h', 'hh', 'm', 'mm',
  's', 'ss', 'S', 'SS', 'SSS',
  'Z', 'ZZ', 'X', 'x'
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
