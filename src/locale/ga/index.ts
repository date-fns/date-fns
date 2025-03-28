import type { Locale } from "../types.js";
import formatDistance from './_lib/formatDistance/index.js';
import formatRelative from './_lib/formatRelative/index.js';
import localize from './_lib/localize/index.js';
import match from './_lib/match/index.js';
import formatLong from './_lib/formatLong/index.js';

/**
 * @type {Locale}
 * @category Locales
 * @summary Gaelic locale (Ireland).
 * @language Gaelic
 * @iso-639-2 gla
 * @author Alexander Krupko [@AlexKrupko]{@link https://github.com/AlexKrupko}
 */
const locale: Locale = {
    code: 'ga-IE',
    formatDistance,
    formatLong,
    formatRelative,
    localize,
    match,
    options: {
        weekStartsOn: 1 /* Monday */,
        firstWeekContainsDate: 4,
    },
};

export default locale;
