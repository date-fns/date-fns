import buildDistanceInWordsLocale from './buildDistanceInWordsLocale/index.js'
import buildFormatLocale from './buildFormatLocale/index.js'

/**
 * @type {Locale}
 * @category Locales
 * @summary Macedonian locale.
 * @language Macedonian
 * @iso-639-2 mkd
 * @author Petar Vlahu [@vlahupetar]{@link https://github.com/vlahupetar}
 */
var mkLocale = {
  distanceInWords: buildDistanceInWordsLocale(),
  format: buildFormatLocale()
}

export default mkLocale
