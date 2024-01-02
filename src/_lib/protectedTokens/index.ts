const protectedDayOfYearTokens = ["D", "DD"];
const protectedWeekYearTokens = ["YY", "YYYY"];

export function isProtectedDayOfYearToken(token: string): boolean {
  return protectedDayOfYearTokens.indexOf(token) !== -1;
}

export function isProtectedWeekYearToken(token: string): boolean {
  return protectedWeekYearTokens.indexOf(token) !== -1;
}

export function throwProtectedError(
  token: string,
  format: string,
  input: string,
): void {
  if (token === "YYYY") {
    throw new RangeError(
      `Use \`yyyy\` instead of \`YYYY\` (in \`${format}\`) for formatting years to the input \`${input}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`,
    );
  } else if (token === "YY") {
    throw new RangeError(
      `Use \`yy\` instead of \`YY\` (in \`${format}\`) for formatting years to the input \`${input}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`,
    );
  } else if (token === "D") {
    throw new RangeError(
      `Use \`d\` instead of \`D\` (in \`${format}\`) for formatting days of the month to the input \`${input}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`,
    );
  } else if (token === "DD") {
    throw new RangeError(
      `Use \`dd\` instead of \`DD\` (in \`${format}\`) for formatting days of the month to the input \`${input}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`,
    );
  }
}
