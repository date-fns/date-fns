export default function buildFormatLongFn(args) {
  return (options = {}) => {
    var width = options.width ? String(options.width) : args.defaultWidth
    var format = args.formats[width] || args.formats[args.defaultWidth]
    return format
  }
}
