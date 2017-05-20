var tokensToBeShortedPattern = /MMMM|MM|DD|dddd/g

function buildShortLongFormat (format) {
  return format.replace(tokensToBeShortedPattern, function (token) {
    return token.slice(1)
  })
}

export default function buildFormatLong (obj) {
  var formatLongLocale = {
    LTS: obj.LTS,
    LT: obj.LT,
    L: obj.L,
    LL: obj.LL,
    LLL: obj.LLL,
    LLLL: obj.LLLL,
    l: obj.l || buildShortLongFormat(obj.L),
    ll: obj.ll || buildShortLongFormat(obj.LL),
    lll: obj.lll || buildShortLongFormat(obj.LLL),
    llll: obj.llll || buildShortLongFormat(obj.LLLL)
  }

  return function (token) {
    return formatLongLocale[token]
  }
}
