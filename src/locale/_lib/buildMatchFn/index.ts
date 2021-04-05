import {
  BuildMatchFnArgs,
  LocaleMatchResult,
  LocaleParsePatternWidth,
  LocalePatternWidth,
  MatchFn,
} from '../../types'

export default function buildMatchFn<
  Result extends LocaleMatchResult,
  DefaultMatchWidth extends LocalePatternWidth,
  DefaultParseWidth extends LocaleParsePatternWidth
>(
  args: BuildMatchFnArgs<Result, DefaultMatchWidth, DefaultParseWidth>
): MatchFn<Result> {
  return (string, options = {}) => {
    const width = options.width

    const matchPattern =
      (width && args.matchPatterns[width]) ||
      args.matchPatterns[args.defaultMatchWidth]
    const matchResult = string.match(matchPattern)

    if (!matchResult) {
      return null
    }
    const matchedString = matchResult[0]

    const parsePatterns =
      (width && args.parsePatterns[width]) ||
      args.parsePatterns[args.defaultParseWidth]

    const key = Array.isArray(parsePatterns)
      ? findIndex(parsePatterns, (pattern) => pattern.test(matchedString))
      : findKey(parsePatterns, (pattern) => pattern.test(matchedString))

    let value: Result

    value = args.valueCallback ? args.valueCallback(key) : key
    value = options.valueCallback ? options.valueCallback(value) : value

    const rest = string.slice(matchedString.length)

    return { value, rest }
  }
}

function findKey<Key extends string, Value, Obj extends Record<Key, Value>>(
  object: Obj,
  predicate: (value: Value) => boolean
): Key | undefined {
  for (let key in object) {
    if (object.hasOwnProperty(key) && predicate(object[key])) {
      return key
    }
  }
  return undefined
}

function findIndex<Item>(
  array: Item[],
  predicate: (item: Item) => boolean
): number | undefined {
  for (let key = 0; key < array.length; key++) {
    if (predicate(array[key])) {
      return key
    }
  }
  return undefined
}
