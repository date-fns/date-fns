import buildDistanceInWordsLocale from './buildDistanceInWordsLocale/index.js'
import buildFormatLocale from './buildFormatLocale/index.js'

/**
 * @type {Locale}
 * @category Locales
 * @summary Danish locale.
 * @language Danish
 * @iso-639-2 dan
 * @author Anders B. Hansen [@Andersbiha]{@link https://github.com/Andersbiha}
 * @author [@kgram]{@link https://github.com/kgram}
 */
var daLocale = {
  distanceInWords: buildDistanceInWordsLocale(),
  format: buildFormatLocale()
}

export default daLocale
