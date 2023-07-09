import type { Locale } from '../types';
import formatDistance from './_lib/formatDistance';
import formatLong from './_lib/formatLong';
import formatRelative from './_lib/formatRelative';
import localize from './_lib/localize';
import match from './_lib/match';

/**
 * @type {Locale}
 * @category Locales
 * @summary Tajik locale.
 * @language Tajik
 * @iso-639-2 tgk
 * @author Orif N. [@orifn]{@link https://github.com/orifn}
 */
const locale: Locale = {
  code: 'tg',
  formatDistance: formatDistance,
  formatLong: formatLong,
  formatRelative: formatRelative,
  localize: localize,
  match: match,
  options: {
    weekStartsOn: 1 /* Monday */,
    firstWeekContainsDate: 1,
  },
}

export default locale
