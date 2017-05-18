import buildDistanceInWordsLocale from './buildDistanceInWordsLocale/index.js'
import buildFormatLocale from './buildFormatLocale/index.js'

/**
 * @type {Locale}
 * @category Locales
 * @summary Finnish locale.
 * @language Finnish
 * @iso-639-2 fin
 * @author Pyry-Samuli Lahti [@Pyppe]{@link https://github.com/Pyppe}
 */
var fiLocale = {
  distanceInWords: buildDistanceInWordsLocale(),
  format: buildFormatLocale()
}

export default fiLocale
