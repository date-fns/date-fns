import buildDistanceInWordsLocale from './build_distance_in_words_locale/index.js'
import buildFormatLocale from './build_format_locale/index.js'

/**
 * @type {Locale}
 * @category Locales
 * @summary Chinese Simplified locale.
 * @author tonypai [@tpai]{@link https://github.com/tpai}
 */
const zhTwLocale = {
  distanceInWords: buildDistanceInWordsLocale(),
  format: buildFormatLocale()
}

export default zhTwLocale
