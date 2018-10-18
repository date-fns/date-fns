export var protectedTokens = ['D', 'DD', 'YY', 'YYYY']

export function isProtectedToken(token) {
  return protectedTokens.indexOf(token) !== -1
}

export function throwProtectedError(token) {
  throw new RangeError(
    '`options.awareOfUnicodeTokens` must be set to `true` to use `' +
      token +
      '` token; see: https://git.io/fxCyr'
  )
}
