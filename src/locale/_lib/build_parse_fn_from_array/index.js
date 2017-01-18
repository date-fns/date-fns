export default function buildParseFnFromArray (array) {
  var length = array.length
  return function (matchResult) {
    for (var i = 0; i < length; i++) {
      if (matchResult[1] === array[i]) {
        return i
      }
    }

    return -1
  }
}
