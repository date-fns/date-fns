export default function buildMatchFn(args) {
  return function(dirtyString, dirtyOptions) {
    const string = String(dirtyString)
    const options = dirtyOptions || {}
    const width = options.width

    const matchPattern =
      (width && args.matchPatterns[width]) ||
      args.matchPatterns[args.defaultMatchWidth]
    const matchResult = string.match(matchPattern)

    if (!matchResult) {
      return null
    }
    const matchedString = matchResult[0]

    const parsePatterns =
      (width && args.parsePatterns[width]) ||
      args.parsePatterns[args.defaultParseWidth]

    const value
    if (Object.prototype.toString.call(parsePatterns) === '[object Array]') {
      value = findIndex(parsePatterns, function(pattern) {
        return pattern.test(matchedString)
      })
    } else {
      value = findKey(parsePatterns, function(pattern) {
        return pattern.test(matchedString)
      })
    }

    value = args.valueCallback ? args.valueCallback(value) : value
    value = options.valueCallback ? options.valueCallback(value) : value

    return {
      value: value,
      rest: string.slice(matchedString.length)
    }
  }
}

function findKey(object, predicate) {
  for (const key in object) {
    if (object.hasOwnProperty(key) && predicate(object[key])) {
      return key
    }
  }
}

function findIndex(array, predicate) {
  for (const key = 0; key < array.length; key++) {
    if (predicate(array[key])) {
      return key
    }
  }
}
