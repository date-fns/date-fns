export default function buildMatchFn (pattern) {
  return function (dirtyString) {
    var string = String(dirtyString)
    return string.match(pattern)
  }
}
