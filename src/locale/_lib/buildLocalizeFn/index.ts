export default function buildLocalizeFn(args) {
  return function(dirtyIndex, dirtyOptions) {
    const options = dirtyOptions || {}

    const context = options.context ? String(options.context) : 'standalone'

    const valuesArray
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
    const index = args.argumentCallback
      ? args.argumentCallback(dirtyIndex)
      : dirtyIndex
    return valuesArray[index]
  }
}
