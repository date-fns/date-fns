import buildDistanceInWordsLocale from './buildDistanceInWordsLocale/index.js'
import buildFormatLocale from './buildFormatLocale/index.js'

/**
 * @type {Locale}
 * @category Locales
 * @summary Greek locale.
 * @language Greek
 * @iso-639-2 ell
 * @author Theodoros Orfanidis [@teoulas]{@link https://github.com/teoulas}
 */
var elLocale = {
  distanceInWords: buildDistanceInWordsLocale(),
  format: buildFormatLocale()
}

export default elLocale
