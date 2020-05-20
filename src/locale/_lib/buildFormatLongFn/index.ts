export default function buildFormatLongFn (args) {
  return function (dirtyOptions) {
    const options = dirtyOptions || {}
    const width = options.width ? String(options.width) : args.defaultWidth
    const format = args.formats[width] || args.formats[args.defaultWidth]
    return format
  }
}
