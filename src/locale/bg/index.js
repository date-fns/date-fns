import buildDistanceInWordsLocale from './build_distance_in_words_locale/index.js'
import buildFormatLocale from './build_format_locale/index.js'

/**
 * @type {Locale}
 * @category Locales
 * @summary Bulgarian locale.
 * @author Nikolay Stoynov [@arvigeus]{@link https://github.com/arvigeus}
 */
const bgLocale = {
  distanceInWords: buildDistanceInWordsLocale(),
  format: buildFormatLocale()
}

export default bgLocale
