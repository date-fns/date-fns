var buildDistanceInWordsLocale = require('./build_distance_in_words_locale/index.js')
var buildFormatLocale = require('./build_format_locale/index.js')

/**
 * @type {Locale}
 * @category Locales
 * @summary Croatian locale.
 * @author Matija Marohnić [@silvenon]{@link https://github.com/silvenon}
 */
module.exports = {
  distanceInWords: buildDistanceInWordsLocale(),
  format: buildFormatLocale()
}
