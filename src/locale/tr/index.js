import buildDistanceInWordsLocale from './buildDistanceInWordsLocale/index.js'
import buildFormatLocale from './buildFormatLocale/index.js'

/**
 * @type {Locale}
 * @category Locales
 * @summary Turkish locale.
 * @language Turkish
 * @iso-639-2 tur
 * @author Alpcan Aydın [@alpcanaydin]{@link https://github.com/alpcanaydin}
 */
var trLocale = {
  distanceInWords: buildDistanceInWordsLocale(),
  format: buildFormatLocale()
}

export default trLocale
