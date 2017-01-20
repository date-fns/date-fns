var buildDistanceInWordsLocale = require('./build_distance_in_words_locale/index.js')
var buildFormatLocale = require('./build_format_locale/index.js')
var buildParseLocale = require('./build_parse_locale/index.js')

/**
 * @type {Locale}
 * @category Locales
 * @summary English locale.
 */
module.exports = {
  distanceInWords: buildDistanceInWordsLocale(),
  format: buildFormatLocale(),
  parse: buildParseLocale()
}
