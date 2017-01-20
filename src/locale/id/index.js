var buildDistanceInWordsLocale = require('./build_distance_in_words_locale/index.js')
var buildFormatLocale = require('./build_format_locale/index.js')

/**
 * @type {Locale}
 * @category Locales
 * @summary Indonesian locale.
 * @author Rahmat Budiharso [@rbudiharso]{@link https://github.com/rbudiharso}
 */
module.exports = {
  distanceInWords: buildDistanceInWordsLocale(),
  format: buildFormatLocale()
}
