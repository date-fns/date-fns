import buildDistanceInWordsLocale from './build_distance_in_words_locale/index.js'
import buildFormatLocale from './build_format_locale/index.js'

/**
 * @category Locales
 * @summary Romanian locale.
 * @author Sergiu Munteanu [@jsergiu]{@link https://github.com/jsergiu}
 */
const roLocale = {
  distanceInWords: buildDistanceInWordsLocale(),
  format: buildFormatLocale()
}

export default roLocale
