export default function buildLocalizeFn (values, defaultType, indexCallback) {
  return function (dirtyIndex, dirtyOptions) {
    var options = dirtyOptions || {}
    var type = options.type ? String(options.type) : defaultType
    var valuesArray = values[type] || values[defaultType]
    var index = indexCallback ? indexCallback(Number(dirtyIndex)) : Number(dirtyIndex)
    return valuesArray[index]
  }
}
