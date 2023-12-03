import { formatDistance } from "./_lib/formatDistance/index.js";
import { formatLong } from "./_lib/formatLong/index.js";
import { formatRelative } from "./_lib/formatRelative/index.js";
import { localize } from "./_lib/localize/index.js";
import { match } from "./_lib/match/index.js";
import type { Locale } from "../types.js";

/**
 * @category Locales
 * @summary Arabic locale (Egypt).
 * @language Arabic
 * @iso-639-2 ara
 * @author AbdAllah AbdElFattah [@AbdAllahAbdElFattah13](https://github.com/AbdAllahAbdElFattah13)
 */
export const arEG: Locale = {
  code: "ar-EG",
  formatDistance: formatDistance,
  formatLong: formatLong,
  formatRelative: formatRelative,
  localize: localize,
  match: match,
  options: {
    weekStartsOn: 0 /* Sunday */,
    firstWeekContainsDate: 1,
  },
};
