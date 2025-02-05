import type { Quarter, Era, Day, Month } from "../../../types.js";
import type {
  LocaleUnitValue,
  LocaleWidth,
  LocaleDayPeriod,
  MatchFn,
  MatchValueCallback,
} from "../../types.js";

export interface BuildMatchFnArgs<
  Result extends LocaleUnitValue,
  DefaultMatchWidth extends LocaleWidth,
  DefaultParseWidth extends LocaleWidth,
> {
  matchPatterns: BuildMatchFnMatchPatterns<DefaultMatchWidth>;
  defaultMatchWidth: DefaultMatchWidth;
  parsePatterns: BuildMatchFnParsePatterns<Result, DefaultParseWidth>;
  defaultParseWidth: DefaultParseWidth;
  valueCallback?: MatchValueCallback<
    Result extends LocaleDayPeriod ? string : number,
    Result
  >;
}

export type BuildMatchFnMatchPatterns<DefaultWidth extends LocaleWidth> = {
  [Width in LocaleWidth]?: RegExp;
} & {
  [Width in DefaultWidth]: RegExp;
};

export type BuildMatchFnParsePatterns<
  Value extends LocaleUnitValue,
  DefaultWidth extends LocaleWidth,
> = {
  [Width in LocaleWidth]?: ParsePattern<Value>;
} & {
  [Width in DefaultWidth]: ParsePattern<Value>;
};

export type ParsePattern<Value extends LocaleUnitValue> =
  Value extends LocaleDayPeriod
    ? Record<LocaleDayPeriod, RegExp>
    : Value extends Quarter
      ? readonly [RegExp, RegExp, RegExp, RegExp]
      : Value extends Era
        ? readonly [RegExp, RegExp]
        : Value extends Day
          ? readonly [RegExp, RegExp, RegExp, RegExp, RegExp, RegExp, RegExp]
          : Value extends Month
            ? readonly [
                RegExp,
                RegExp,
                RegExp,
                RegExp,
                RegExp,
                RegExp,
                RegExp,
                RegExp,
                RegExp,
                RegExp,
                RegExp,
                RegExp,
              ]
            : never;

export function buildMatchFn<
  Value extends LocaleUnitValue,
  DefaultMatchWidth extends LocaleWidth,
  DefaultParseWidth extends LocaleWidth,
>(
  args: BuildMatchFnArgs<Value, DefaultMatchWidth, DefaultParseWidth>,
): MatchFn<Value> {
  return (string, options = {}) => {
    const width = options.width;

    const matchPattern =
      (width && args.matchPatterns[width]) ||
      args.matchPatterns[args.defaultMatchWidth];
    const matchResult = string.match(matchPattern);

    if (!matchResult) {
      return null;
    }
    const matchedString = matchResult[0];

    const parsePatterns =
      (width && args.parsePatterns[width]) ||
      args.parsePatterns[args.defaultParseWidth];

    const key = (
      Array.isArray(parsePatterns)
        ? findIndex(parsePatterns, (pattern) => pattern.test(matchedString))
        : // [TODO] -- I challenge you to fix the type
          findKey(parsePatterns, (pattern: any) => pattern.test(matchedString))
    ) as Value extends LocaleDayPeriod ? string : number;

    let value: Value;

    value = (args.valueCallback ? args.valueCallback(key) : key) as Value;
    value = options.valueCallback
      ? // [TODO] -- I challenge you to fix the type
        options.valueCallback(value as any)
      : value;

    const rest = string.slice(matchedString.length);

    return { value, rest };
  };
}

function findKey<Value, Obj extends { [key in string | number]: Value }>(
  object: Obj,
  predicate: (value: Value) => boolean,
): keyof Obj | undefined {
  for (const key in object) {
    if (
      Object.prototype.hasOwnProperty.call(object, key) &&
      predicate(object[key])
    ) {
      return key;
    }
  }
  return undefined;
}

function findIndex<Item>(
  array: Item[],
  predicate: (item: Item) => boolean,
): number | undefined {
  for (let key = 0; key < array.length; key++) {
    if (predicate(array[key])) {
      return key;
    }
  }
  return undefined;
}
