function lookup (dictionary) {
  return function (format, index, options) {
    if (format.indexOf('-') > -1) {
      throw new Error('To use non-normative translations, you should use the optional third parameter with a \'casing\' key')
    }
    var casing = options && options.casing
    var formatter = format
    if (casing) {
      formatter = format + '-' + casing
      if (!dictionary[formatter]) {
        throw new Error('No non-normative casing (' + casing + ') translation found for ' + format)
      }
    }
    var formatList = dictionary[formatter]
    return parseInt(index) === index ? formatList[index] : formatList
  }
}

module.exports = lookup
