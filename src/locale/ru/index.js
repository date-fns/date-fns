import buildDistanceInWordsLocale from './build_distance_in_words_locale/index.js'
import buildFormatLocale from './build_format_locale/index.js'

/**
 * @type {Locale}
 * @category Locales
 * @summary Russian locale.
 */
const ruLocale = {
  distanceInWords: buildDistanceInWordsLocale(),
  format: buildFormatLocale()
}

export default ruLocale
