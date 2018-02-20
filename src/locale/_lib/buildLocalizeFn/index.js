export default function buildLocalizeFn (args) {
  return function (dirtyIndex, dirtyOptions) {
    var options = dirtyOptions || {}
    var width = options.width ? String(options.width) : args.defaultWidth
    var context = options.context ? String(options.context) : 'standalone'

    var valuesArray
    if (context === 'formatting' && args.formattingValues) {
      valuesArray = args.formattingValues[width] || args.formattingValues[args.defaultFormattingWidth]
    } else {
      valuesArray = args.values[width] || args.values[args.defaultWidth]
    }
    var index = args.argumentCallback ? args.argumentCallback(dirtyIndex) : dirtyIndex
    return valuesArray[index]
  }
}
