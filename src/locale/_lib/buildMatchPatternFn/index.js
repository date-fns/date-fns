export default function buildMatchPatternFn (args) {
  return function (dirtyString) {
    var string = String(dirtyString)

    var matchResult = string.match(args.matchPattern)
    if (!matchResult) {
      return null
    }
    var matchedString = matchResult[0]

    var parseResult = string.match(args.parsePattern)
    if (!parseResult) {
      return null
    }
    var value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0]

    return {
      value: value,
      rest: string.slice(matchedString.length)
    }
  }
}
