import buildDistanceInWordsLocale from './buildDistanceInWordsLocale/index.js'
import buildFormatLocale from './buildFormatLocale/index.js'

/**
 * @type {Locale}
 * @category Locales
 * @summary Japanese locale.
 * @author Thomas Eilmsteiner [@DeMuu]{@link https://github.com/DeMuu}
 * @author Yamagishi Kazutoshi [@ykzts]{@link https://github.com/ykzts}
 */
var jaLocale = {
  distanceInWords: buildDistanceInWordsLocale(),
  format: buildFormatLocale()
}

export default jaLocale
