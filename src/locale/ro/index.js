import buildDistanceInWordsLocale from './buildDistanceInWordsLocale/index.js'
import buildFormatLocale from './buildFormatLocale/index.js'

/**
 * @category Locales
 * @summary Romanian locale.
 * @author Sergiu Munteanu [@jsergiu]{@link https://github.com/jsergiu}
 */
const roLocale = {
  distanceInWords: buildDistanceInWordsLocale(),
  format: buildFormatLocale()
}

export default roLocale
