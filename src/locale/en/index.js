import buildDistanceInWordsLocale from './buildDistanceInWordsLocale/index.js'
import buildFormatLocale from './buildFormatLocale/index.js'
import buildParseLocale from './buildParseLocale/index.js'

/**
 * @type {Locale}
 * @category Locales
 * @summary English locale.
 */
const enLocale = {
  distanceInWords: buildDistanceInWordsLocale(),
  format: buildFormatLocale(),
  parse: buildParseLocale()
}

export default enLocale
