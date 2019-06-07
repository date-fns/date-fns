export default function buildLocalizeFn(args) {
  return function(dirtyIndex, dirtyOptions) {
    var options = dirtyOptions || {}

    var context = options.context ? String(options.context) : 'standalone'

    var valuesArray
    if (context === 'formatting' && args.formattingValues) {
      var defaultWidth = args.defaultFormattingWidth || args.defaultWidth
      var width = options.width ? String(options.width) : defaultWidth
      valuesArray =
        args.formattingValues[width] || args.formattingValues[defaultWidth]
    } else {
      var defaultWidth = args.defaultWidth
      var width = options.width ? String(options.width) : args.defaultWidth
      valuesArray = args.values[width] || args.values[defaultWidth]
    }
    var index = args.argumentCallback
      ? args.argumentCallback(dirtyIndex)
      : dirtyIndex
    return valuesArray[index]
  }
}
