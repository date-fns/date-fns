import buildDistanceInWordsLocale from './build_distance_in_words_locale/index.js'
import buildFormatLocale from './build_format_locale/index.js'
import buildParseLocale from './build_parse_locale/index.js'

/**
 * @category Locales
 * @summary English locale.
 */
export default {
  distanceInWords: buildDistanceInWordsLocale(),
  format: buildFormatLocale(),
  parse: buildParseLocale()
}
