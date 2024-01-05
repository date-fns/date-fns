const dayOfYearTokenRE = /^D+$/;
const weekYearTokenRE = /^Y+$/;

const throwTokens = ["D", "DD", "YY", "YYYY"];

export function isProtectedDayOfYearToken(token: string) {
  return dayOfYearTokenRE.test(token);
}

export function isProtectedWeekYearToken(token: string) {
  return weekYearTokenRE.test(token);
}

export function warnOrThrowProtectedError(
  token: string,
  format: string,
  input: string,
): void {
  const _message = message(token, format, input);
  console.warn(_message);
  if (throwTokens.includes(token)) throw new RangeError(_message);
}

function message(token: string, format: string, input: string) {
  const subject = token[0] === "Y" ? "years" : "days of the month";
  return `Use \`${token.toLowerCase()}\` instead of \`${token}\` (in \`${format}\`) for formatting ${subject} to the input \`${input}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
