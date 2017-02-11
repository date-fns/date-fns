import buildDistanceInWordsLocale from './build_distance_in_words_locale/index.js'
import buildFormatLocale from './build_format_locale/index.js'

/**
 * @type {Locale}
 * @category Locales
 * @summary Polish locale.
 * @author Mateusz Derks [@ertrzyiks]{@link https://github.com/ertrzyiks}
 */
const plLocale = {
  distanceInWords: buildDistanceInWordsLocale(),
  format: buildFormatLocale()
}

export default plLocale
