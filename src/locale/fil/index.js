import buildDistanceInWordsLocale from './buildDistanceInWordsLocale/index.js'
import buildFormatLocale from './buildFormatLocale/index.js'

/**
 * @type {Locale}
 * @category Locales
 * @summary Filipino locale.
 * @language Filipino
 * @iso-639-2 fil
 * @author Ian De La Cruz [@RIanDeLaCruz]{@link https://github.com/RIanDeLaCruz}
 */
var filLocale = {
  distanceInWords: buildDistanceInWordsLocale(),
  format: buildFormatLocale()
}

export default filLocale
