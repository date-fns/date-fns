export default function buildMatchPatternFn (args) {
  return function (dirtyString, dirtyOptions) {
    const string = String(dirtyString)
    const options = dirtyOptions || {}

    const matchResult = string.match(args.matchPattern)
    if (!matchResult) {
      return null
    }
    const matchedString = matchResult[0]

    const parseResult = string.match(args.parsePattern)
    if (!parseResult) {
      return null
    }
    const value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0]
    value = options.valueCallback ? options.valueCallback(value) : value

    return {
      value: value,
      rest: string.slice(matchedString.length)
    }
  }
}
