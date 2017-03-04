import buildDistanceInWordsLocale from './build_distance_in_words_locale/index.js'
import buildFormatLocale from './build_format_locale/index.js'
import buildParseLocale from './build_parse_locale/index.js'

/**
 * @type {Locale}
 * @category Locales
 * @summary English locale.
 */
const enLocale = {
  distanceInWords: buildDistanceInWordsLocale(),
  format: buildFormatLocale(),
  parse: buildParseLocale()
}

export default enLocale
