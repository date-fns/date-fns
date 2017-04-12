import buildDistanceInWordsLocale from './buildDistanceInWordsLocale/index.js'
import buildFormatLocale from './buildFormatLocale/index.js'

/**
 * @category Locales
 * @summary Romanian locale.
 * @author Sergiu Munteanu [@jsergiu]{@link https://github.com/jsergiu}
 */
var roLocale = {
  distanceInWords: buildDistanceInWordsLocale(),
  format: buildFormatLocale()
}

export default roLocale
