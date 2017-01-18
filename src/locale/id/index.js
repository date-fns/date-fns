import buildDistanceInWordsLocale from './build_distance_in_words_locale/index.js'
import buildFormatLocale from './build_format_locale/index.js'

/**
 * @category Locales
 * @summary Indonesian locale.
 * @author Rahmat Budiharso [@rbudiharso]{@link https://github.com/rbudiharso}
 */
export default {
  distanceInWords: buildDistanceInWordsLocale(),
  format: buildFormatLocale()
}
