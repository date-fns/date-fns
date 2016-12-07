import buildDistanceInWordsLocale from './build_distance_in_words_locale/index.js'
import buildFormatLocale from './build_format_locale/index.js'
import buildParseLocale from './build_parse_locale/index.js'

/**
 * @category Locales
 * @summary English locale.
 */
export const distanceInWords = buildDistanceInWordsLocale()
export const format = buildFormatLocale()
export const parse = buildParseLocale()
