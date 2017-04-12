import buildDistanceInWordsLocale from './buildDistanceInWordsLocale/index.js'
import buildFormatLocale from './buildFormatLocale/index.js'

/**
 * @type {Locale}
 * @category Locales
 * @summary Bulgarian locale.
 * @author Nikolay Stoynov [@arvigeus]{@link https://github.com/arvigeus}
 */
var bgLocale = {
  distanceInWords: buildDistanceInWordsLocale(),
  format: buildFormatLocale()
}

export default bgLocale
