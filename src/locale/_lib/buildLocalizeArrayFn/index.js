export default function buildLocalizeArrayFn (values, defaultType) {
  return function (dirtyOptions) {
    var options = dirtyOptions || {}
    var type = options.type ? String(options.type) : defaultType
    return values[type] || values[defaultType]
  }
}
