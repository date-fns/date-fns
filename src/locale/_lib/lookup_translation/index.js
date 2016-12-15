function lookup (dictionary) {
  return function (format, index) {
    var formatList = dictionary[format];
    return typeof index !== 'undefined' ? formatList[index] : formatList;
  }
}

module.exports = lookup;
