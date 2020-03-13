var protectedDayOfYearTokens = ['D', 'DD']
var protectedWeekYearTokens = ['YY', 'YYYY']

export function isProtectedDayOfYearToken(token) {
  return protectedDayOfYearTokens.indexOf(token) !== -1
}

export function isProtectedWeekYearToken(token) {
  return protectedWeekYearTokens.indexOf(token) !== -1
}

export function throwProtectedError(token) {
  if (token === 'YYYY') {
    throw new RangeError(
      'Use `yyyy` instead of `YYYY` for formatting years; see: https://git.io/fxCyr'
    )
  } else if (token === 'YY') {
    throw new RangeError(
      'Use `yy` instead of `YY` for formatting years; see: https://git.io/fxCyr'
    )
  } else if (token === 'D') {
    throw new RangeError(
      'Use `d` instead of `D` for formatting days of the month; see: https://git.io/fxCyr'
    )
  } else if (token === 'DD') {
    throw new RangeError(
      'Use `dd` instead of `DD` for formatting days of the month; see: https://git.io/fxCyr'
    )
  }
}
