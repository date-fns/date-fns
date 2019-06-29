export default function buildFormatLongFn(args: any) {
  return function(dirtyOptions: any) {
    var options = dirtyOptions || {}
    var width = options.width ? String(options.width) : args.defaultWidth
    var format = args.formats[width] || args.formats[args.defaultWidth]
    return format
  }
}
