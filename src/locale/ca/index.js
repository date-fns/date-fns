var buildDistanceInWordsLocale = require('./build_distance_in_words_locale/index.js')
var buildFormatLocale = require('./build_format_locale/index.js')

/**
 * @type {Locale}
 * @category Locales
 * @summary Catalan locale.
 * @author Guillermo Grau [@guigrpa]{@link https://github.com/guigrpa}
 */
module.exports = {
  distanceInWords: buildDistanceInWordsLocale(),
  format: buildFormatLocale()
}
