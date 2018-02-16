export default function buildFormatLongFn (formats, defaultWidth) {
  return function (dirtyOptions) {
    var options = dirtyOptions || {}
    var width = options.width ? String(options.width) : defaultWidth
    var format = formats[width] || formats[defaultWidth]
    return format
  }
}
