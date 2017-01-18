import buildDistanceInWordsLocale from './build_distance_in_words_locale/index.js'
import buildFormatLocale from './build_format_locale/index.js'

/**
 * @category Locales
 * @summary Italian locale.
 * @author Alberto Restifo [@albertorestifo]{@link https://github.com/albertorestifo}
 */
export default {
  distanceInWords: buildDistanceInWordsLocale(),
  format: buildFormatLocale()
}
