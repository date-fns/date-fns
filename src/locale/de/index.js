import buildDistanceInWordsLocale from './buildDistanceInWordsLocale/index.js'
import buildFormatLocale from './buildFormatLocale/index.js'

/**
 * @type {Locale}
 * @category Locales
 * @summary German locale.
 * @author Thomas Eilmsteiner [@DeMuu]{@link https://github.com/DeMuu}
 * @author Asia [@asia-t]{@link https://github.com/asia-t}
 */
var deLocale = {
  distanceInWords: buildDistanceInWordsLocale(),
  format: buildFormatLocale()
}

export default deLocale
