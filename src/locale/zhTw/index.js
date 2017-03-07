import buildDistanceInWordsLocale from './buildDistanceInWordsLocale/index.js'
import buildFormatLocale from './buildFormatLocale/index.js'

/**
 * @type {Locale}
 * @category Locales
 * @summary Chinese Simplified locale.
 * @author tonypai [@tpai]{@link https://github.com/tpai}
 */
const zhTwLocale = {
  distanceInWords: buildDistanceInWordsLocale(),
  format: buildFormatLocale()
}

export default zhTwLocale
