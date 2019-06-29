export default function buildMatchPatternFn (args: any) {
  return function (dirtyString: any, dirtyOptions: any) {
    var string = String(dirtyString)
    var options = dirtyOptions || {}

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
    value = options.valueCallback ? options.valueCallback(value) : value

    return {
      value: value,
      rest: string.slice(matchedString.length)
    }
  }
}
