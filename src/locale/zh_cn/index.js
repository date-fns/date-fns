import buildDistanceInWordsLocale from './build_distance_in_words_locale/index.js'
import buildFormatLocale from './build_format_locale/index.js'

/**
 * @type {Locale}
 * @category Locales
 * @summary Chinese Simplified locale.
 * @author Changyu Geng [@KingMario]{@link https://github.com/KingMario}
 */
const zhCnLocale = {
  distanceInWords: buildDistanceInWordsLocale(),
  format: buildFormatLocale()
}

export default zhCnLocale
