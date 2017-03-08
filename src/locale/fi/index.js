import buildDistanceInWordsLocale from './buildDistanceInWordsLocale/index.js'
import buildFormatLocale from './buildFormatLocale/index.js'

/**
 * @type {Locale}
 * @category Locales
 * @summary Finnish locale.
 * @author Pyry-Samuli Lahti [@Pyppe]{@link https://github.com/Pyppe}
 */
const fiLocale = {
  distanceInWords: buildDistanceInWordsLocale(),
  format: buildFormatLocale()
}

export default fiLocale
