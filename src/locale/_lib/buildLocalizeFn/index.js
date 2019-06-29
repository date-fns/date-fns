export default function buildLocalizeFn(args, _arg2, _arg3) {
  // TODO@ts: Find out what _arg2 and _arg3 are for
  return function(dirtyIndex, dirtyOptions) {
    var options = dirtyOptions || {}
    var context = options.context ? String(options.context) : 'standalone'
    var valuesArray
    if (context === 'formatting' && args.formattingValues) {
      const defaultWidth = args.defaultFormattingWidth || args.defaultWidth
      const width = options.width ? String(options.width) : defaultWidth
      valuesArray =
        args.formattingValues[width] || args.formattingValues[defaultWidth]
    } else {
      const defaultWidth = args.defaultWidth
      const width = options.width ? String(options.width) : args.defaultWidth
      valuesArray = args.values[width] || args.values[defaultWidth]
    }
    var index = args.argumentCallback
      ? args.argumentCallback(dirtyIndex)
      : dirtyIndex
    return valuesArray[index]
  }
}
