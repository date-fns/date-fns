import buildDistanceInWordsLocale from './buildDistanceInWordsLocale/index.js'
import buildFormatLocale from './buildFormatLocale/index.js'

/**
 * @type {Locale}
 * @category Locales
 * @summary Norwegian Bokmål locale.
 * @author Hans-Kristian Koren [@Hanse]{@link https://github.com/Hanse}
 */
var nbLocale = {
  distanceInWords: buildDistanceInWordsLocale(),
  format: buildFormatLocale()
}

export default nbLocale
