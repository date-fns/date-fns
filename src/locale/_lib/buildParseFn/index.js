export default function buildParseFn (patterns, defaultType) {
  return function (matchResult, dirtyOptions) {
    var options = dirtyOptions || {}
    var type = options.type ? String(options.type) : defaultType
    var patternsArray = patterns[type] || patterns[defaultType]
    var string = matchResult[1]

    return patternsArray.findIndex(function (pattern) {
      return string.match(pattern)
    })
  }
}
