function buildMatchRegExpFromArray (array) {
  var matchRegExp = new RegExp(
    '^(' + array.join('|') + ')'
  )

  return matchRegExp
}

module.exports = buildMatchRegExpFromArray
