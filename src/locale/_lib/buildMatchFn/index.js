export default function buildMatchFn (patterns, defaultType) {
  return function (dirtyString, dirtyOptions) {
    var options = dirtyOptions || {}
    var type = options.type ? String(options.type) : defaultType
    var pattern = patterns[type] || patterns[defaultType]
    var string = String(dirtyString)
    return string.match(pattern)
  }
}
