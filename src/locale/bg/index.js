import buildDistanceInWordsLocale from './build_distance_in_words_locale/index.js'
import buildFormatLocale from './build_format_locale/index.js'

/**
 * @category Locales
 * @summary Bulgarian locale.
 * @author Nikolay Stoynov [@arvigeus]{@link https://github.com/arvigeus}
 */
export default {
  distanceInWords: buildDistanceInWordsLocale(),
  format: buildFormatLocale()
}
