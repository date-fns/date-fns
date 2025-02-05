import type { MatchFn, MatchValueCallback } from "../../types.js";

export interface BuildMatchPatternFnArgs<Result> {
  matchPattern: RegExp;
  parsePattern: RegExp;
  valueCallback?: MatchValueCallback<string, Result>;
}

export function buildMatchPatternFn<Result>(
  args: BuildMatchPatternFnArgs<Result>,
): MatchFn<Result> {
  return (string, options = {}) => {
    const matchResult = string.match(args.matchPattern);
    if (!matchResult) return null;
    const matchedString = matchResult[0];

    const parseResult = string.match(args.parsePattern);
    if (!parseResult) return null;
    let value = (
      args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0]
    ) as Result;
    // [TODO] I challenge you to fix the type
    value = options.valueCallback ? options.valueCallback(value as any) : value;

    const rest = string.slice(matchedString.length);

    return { value, rest };
  };
}
