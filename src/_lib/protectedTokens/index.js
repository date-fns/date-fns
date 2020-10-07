var protectedDayOfYearTokens = ['D', 'DD']
var protectedWeekYearTokens = ['YY', 'YYYY']

export function isProtectedDayOfYearToken(token) {
  return protectedDayOfYearTokens.indexOf(token) !== -1
}

export function isProtectedWeekYearToken(token) {
  return protectedWeekYearTokens.indexOf(token) !== -1
}

export function throwProtectedError(token, format, input) {
  if (token === 'YYYY') {
    throw new RangeError(
      `Use \`yyyy\` instead of \`YYYY\` (in \`${format}\`) for formatting years to the input \`${input}\`; see: https://date-fns.org/docs/Unicode-Tokens`
    )
  } else if (token === 'YY') {
    throw new RangeError(
      `Use \`yy\` instead of \`YY\` (in \`${format}\`) for formatting years to the input \`${input}\`; see: https://date-fns.org/docs/Unicode-Tokens`
    )
  } else if (token === 'D') {
    throw new RangeError(
      `Use \`d\` instead of \`D\` (in \`${format}\`) for formatting days of the month to the input \`${input}\`; see: https://date-fns.org/docs/Unicode-Tokens`
    )
  } else if (token === 'DD') {
    throw new RangeError(
      `Use \`dd\` instead of \`DD\` (in \`${format}\`) for formatting days of the month to the input \`${input}\`; see: https://date-fns.org/docs/Unicode-Tokens`
    )
  }
}
