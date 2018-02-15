export default function buildMatchFn (args) {
  return function (dirtyString, dirtyOptions) {
    var string = String(dirtyString)
    var options = dirtyOptions || {}
    var width = options.width

    var matchPattern = (width && args.matchPatterns[width]) || args.matchPatterns[args.defaultMatchWidth]
    var matchResult = string.match(matchPattern)

    if (!matchResult) {
      return null
    }
    var matchedString = matchResult[0]

    var parsePatternsArray = (width && args.parsePatterns[width]) || args.parsePatterns[args.defaultParseWidth]
    var value = parsePatternsArray.findIndex(function (pattern) {
      return pattern.test(string)
    })

    value = args.valueCallback ? args.valueCallback(value) : value

    return {
      value: value,
      rest: string.slice(matchedString.length)
    }
  }
}
