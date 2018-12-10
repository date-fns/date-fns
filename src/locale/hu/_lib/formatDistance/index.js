var translations = {
  about: 'körülbelül',
  over: 'több mint',
  almost: 'majdnem',
  lessthan: 'kevesebb mint'
}

function translate(number, addSuffix, key, comparison) {
  var num = number
  switch (key) {
    case 'xseconds':
      if (comparison === -1 && addSuffix) return num + ' másodperccel ezelőtt'
      if (comparison === -1 && !addSuffix) return num + ' másodperce'
      if (comparison === 1) return num + ' másodperc múlva'
      return num + ' másodperc'

    case 'halfaminute':
      if (comparison === -1 && addSuffix) return 'fél perccel ezelőtt'
      if (comparison === -1 && !addSuffix) return 'fél perce'
      if (comparison === 1) return 'fél perc múlva'
      return 'fél perc'

    case 'xminutes':
      if (comparison === -1 && addSuffix) return num + ' perccel ezelőtt'
      if (comparison === -1 && !addSuffix) return num + ' perce'
      if (comparison === 1) return num + ' perc múlva'
      return num + ' perc'

    case 'xhours':
      if (comparison === -1 && addSuffix) return num + ' órával ezelőtt'
      if (comparison === -1 && !addSuffix) return num + ' órája'
      if (comparison === 1) return num + ' óra múlva'
      return num + ' óra'

    case 'xdays':
      if (comparison === -1 && addSuffix) return num + ' nappal ezelőtt'
      if (comparison === -1 && !addSuffix) return num + ' napja'
      if (comparison === 1) return num + ' nap múlva'
      return num + ' nap'

    case 'xmonths':
      if (comparison === -1 && addSuffix) return num + ' hónappal ezelőtt'
      if (comparison === -1 && !addSuffix) return num + ' hónapja'
      if (comparison === 1) return num + ' hónap múlva'
      return num + ' hónap'

    case 'xyears':
      if (comparison === -1 && addSuffix) return num + ' évvel ezelőtt'
      if (comparison === -1 && !addSuffix) return num + ' éve'
      if (comparison === 1) return num + ' év múlva'
      return num + ' év'
  }
  return ''
}

export default function formatDistance(token, count, options) {
  options = options || {}
  var adverb = token.match(/about|over|almost|lessthan/i)
  var unit = token.replace(adverb, '')

  var result
  result = translate(
    count,
    options.addSuffix,
    unit.toLowerCase(),
    options.comparison
  )

  if (adverb) {
    result = translations[adverb[0].toLowerCase()] + ' ' + result
  }

  return result
}
